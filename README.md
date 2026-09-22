# SND / SAM-16 Manual

Source repository for the modern SAM-16 manual and interactive online documentation.

## Development

This site is built with Astro and is intended to be deployed as a static site.

- `main`: production-ready source
- feature branches: manual, simulator, and UI work
- deployment: GitHub Actions → IONOS (SFTP)

The online manual should preserve the SAM-16 hardware vocabulary and make complex timing/routing behavior visual and interactive.

The practical reading layer is maintained in `src/data/guides.ts`; detailed
reference text and tables live in `src/data/manual.ts`. Both are rendered by
`src/components/ManualReference.astro`, with physical control maps from
`src/components/PanelLocator.astro`. Each text pair is German / English; German
is the default. The existing interactive examples remain in `src/pages/index.astro`.
See [source policy and coverage](docs/manual/SOURCE-POLICY.md) before editing hardware claims.

Build with `npm install` then `npm run build`. The static output is `dist/`.
Use the browser's Print command for the reference in the selected language;
interactive demos are omitted from printing.
