# Nuxt 3 + TailwindCSS + Atomic Design

- [Nuxt 3 + TailwindCSS + Atomic Design](#nuxt-3--tailwindcss--atomic-design)
  - [Features](#features)
  - [Setup](#setup)
  - [Development Server](#development-server)
  - [Production](#production)

## Features

- [Nuxt 3](https://v3.nuxtjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
  - [Atoms](./components/atoms)
  - [Molecules](./components/molecules)
  - [Organisms](./components/organisms)
  - [Templates](./components/templates)
  - [Pages](./pages)
- [Vite](https://vitejs.dev/)
- [Unplugin Icons](https://github.com/antfu/unplugin-icons)

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
