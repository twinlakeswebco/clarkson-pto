# Clarkson Elementary PTO

A mobile-first web application for Clarkson Elementary School PTO in Clarkson, Kentucky.

## Current experience

- Public PTO homepage with events, volunteer opportunities, announcements, Title I resources, nonprofit transparency, spirit wear, FAQ, and contact information
- Redhawks-focused responsive design using the supplied mascot artwork
- Installable web app: manifest with 192px, 512px, and maskable 512px icons, a 180px Apple touch icon, and a multi-size `favicon.ico`
- Vector mascot (`public/redhawk.svg`) for sharp artwork at any size, plus a 1200×630 social sharing image (`public/og-image.png`)
- Persistent mobile quick actions with safe-area support for notched phones
- Branded 404 page and baseline security headers
- Member-dashboard preview for commitments, volunteer hours, materials, committee resources, forms, and officer tools
- Direct connection to the Clarkson PTO BAND community

## Important launch status

The public site is ready for content review. Items that require PTO-provided records, accounts, or dates are intentionally marked **Coming soon** rather than populated with invented information.

The member dashboard is a visual preview. Live access and data entry remain disabled until:

1. BAND approves an Open API application for the PTO site.
2. OAuth credentials are configured securely on the server.
3. Server-side BAND membership verification is enabled.
4. Protected storage and officer roles are approved by the PTO.

No sensitive member information should be placed in the public site bundle.

## Development

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev        # local development server
npm run build      # production build plus artifact validation
npm test           # build, then render checks against the built worker
npm run lint
npm run typecheck
```

The project uses Next-compatible React components through Vinext and builds a Cloudflare Worker (`dist/server/index.js`) with static assets in `dist/client`. A Wrangler deployment config is not included yet; add one before deploying to Cloudflare.

## Before launch

- Confirm the production domain in `app/lib/site.ts` (used for the Open Graph image and canonical URL).
- Confirm with the PTO: the "Est. 2010" mascot caption, the volunteer contact listing, the Facebook group link, and the Title I section.
- The member area is a visual preview and is marked `noindex`.

## App icons

Icons in `public/` are generated from the vector mascot `public/redhawk.svg`, which was traced from the original `redhawk.png` artwork.

## Organization

Clarkson Elementary School PTO Inc.  
EIN: 27-0908487  
Tax-exempt since February 2010
