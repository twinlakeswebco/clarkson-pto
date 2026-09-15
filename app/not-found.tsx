/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { BAND_URL } from "./lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container not-found-inner">
        <img src="/redhawk.svg" width="272" height="186" alt="" />
        <p className="eyebrow eyebrow-light">Error 404</p>
        <h1>This page flew the coop.</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <div className="button-row">
          <a className="button button-light" href="/">Back to the PTO home</a>
          <a className="button button-outline" href={BAND_URL} target="_blank" rel="noreferrer">Open BAND <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </main>
  );
}
