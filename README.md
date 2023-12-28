# Popcorn

Create Nuxt extendable layer with this GitHub template.

## Motivation
This is to make the most sane starter which includes:
- Animation helpers
- Web page optimizers
  - Inline critical CSS
  - Offload JS
  - Font override
  - Partial hydration
- SEO optimization

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Usage

First, install the package with your favorite package manager:

```bash
pnpm install @fdcn/popcorn
```

Add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: '@fdcn/popcorn'
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
