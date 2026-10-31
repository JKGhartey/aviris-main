# Aviris UI

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Turborepo](https://img.shields.io/badge/Turborepo-2-blue)

A React component library built on [shadcn/ui](https://ui.shadcn.com) and Tailwind CSS, set up as a Turborepo monorepo with a landing page, a docs site and a templates app.

## Live sites

- Landing page: https://aviris-ui.vercel.app
- Docs: https://aviris-main-docs.vercel.app
- Templates: https://aviris-main-templates.vercel.app (planned starters only, none released yet)

## Components

Custom components live in `packages/ui/src/components/core`:

- **FileUpload**: drag and drop upload with file validation, previews and file-type icons
- **FolderStructure**: a collapsible file and folder tree
- **FloatingActionBar**: a floating bar that expands to show more actions
- **Notifications**: a notification stack with variants and a `useNotifications` hook
- **APITable**: the props table the docs use for every component

They sit on top of shadcn/ui primitives (button, dialog, tabs, table, tooltip, sheet and others) in `packages/ui/src/components/ui`. Each component has a page in the docs with a live preview and its props.

## What's in the repo

```
apps/
├── www/         landing page (port 3000)
├── docs/        component docs and guides (port 3001)
└── templates/   templates app (port 3002)
packages/
├── ui/                  components, theme and shared styles
├── seo/                 shared metadata helpers for the three apps
├── eslint-config/
└── typescript-config/
```

## Getting started

Requires Node 20.17+ and pnpm 9.

```bash
git clone https://github.com/JKGhartey/aviris-main.git
cd aviris-main
pnpm install

pnpm dev     # runs all three apps
pnpm build   # builds all apps and packages
pnpm lint
```

In development the apps link to each other on localhost. In production they read these environment variables:

| App | Variables |
| --- | --- |
| www | `NEXT_PUBLIC_APP_DOCS_URL`, `NEXT_PUBLIC_APP_TEMPLATES_URL` |
| docs | `NEXT_PUBLIC_APP_LANDING_URL`, `NEXT_PUBLIC_APP_TEMPLATES_URL` |
| templates | `NEXT_PUBLIC_APP_DOCS_URL`, `NEXT_PUBLIC_APP_LANDING_PAGE_URL` |

### Adding a shadcn/ui component

```bash
pnpm ui add <component-name>
```

This runs the shadcn CLI inside `packages/ui`.

## CLI

The installer that copies components into your own project lives in a separate repo: [aviris-cli](https://github.com/JKGhartey/aviris-cli).

## Contributing

Issues and pull requests are welcome. See the [contributing guide](https://aviris-main-docs.vercel.app/guides/contributing) in the docs, or [open an issue](https://github.com/JKGhartey/aviris-main/issues).

## Credits

The monorepo setup started from [dan5py/turborepo-shadcn-ui](https://github.com/dan5py/turborepo-shadcn-ui) (MIT).

## License

MIT. See [LICENSE](LICENSE).

Built by [Jerome Ghartey](https://jeromeghartey1.vercel.app).
