# Clarkson Elementary PTO

A mobile-first web application for Clarkson Elementary School PTO in Clarkson, Kentucky.

## Current experience

- Public PTO homepage with events, volunteer opportunities, announcements, Title I resources, nonprofit transparency, spirit wear, FAQ, and contact information
- Redhawks-focused responsive design using the supplied mascot artwork
- Installable mobile-web metadata and persistent mobile quick actions
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
npm run dev
```

The project uses Next-compatible React components through Vinext and is prepared for Cloudflare-hosted deployment.

## Organization

Clarkson Elementary School PTO Inc.  
EIN: 27-0908487  
Tax-exempt since February 2010
