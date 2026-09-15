import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function render(path) {
  const response = await worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  return { response, html: await response.text() };
}

test("home page renders with metadata and relative app icons", async () => {
  const { response, html } = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /<title>Clarkson Elementary PTO<\/title>/);
  assert.match(html, /<link rel="manifest" href="\/site\.webmanifest"/);
  assert.match(html, /<link rel="apple-touch-icon" href="\/apple-touch-icon\.png"/);
  assert.match(html, /href="\/icon-192\.png"/);
  assert.match(html, /property="og:image" content="https:\/\/[^"]+\/og-image\.png"/);
  assert.match(html, /viewport-fit=cover/);
  assert.match(html, /href="#main"/);
  assert.doesNotMatch(html, /codex-preview/);
});

test("HTML responses carry security headers", async () => {
  const { response } = await render("/");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.ok(response.headers.get("referrer-policy"));
});

test("member preview is excluded from search indexing", async () => {
  const { response, html } = await render("/members");
  assert.equal(response.status, 200);
  assert.match(html, /<meta name="robots" content="noindex, ?nofollow"/);
});

test("unknown routes return the branded 404 page", async () => {
  const { response, html } = await render("/does-not-exist");
  assert.equal(response.status, 404);
  assert.match(html, /This page flew the coop/);
});

test("app icons and manifest are packaged", () => {
  for (const file of [
    "favicon.ico",
    "icon-192.png",
    "icon-512.png",
    "icon-maskable-512.png",
    "apple-touch-icon.png",
    "og-image.png",
    "site.webmanifest",
    "robots.txt",
  ]) {
    assert.ok(existsSync(new URL(`../dist/client/${file}`, import.meta.url)), `missing dist/client/${file}`);
  }
});
