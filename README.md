<p align="center">
  <img src="public/images/logo/logo.png" alt="Project Logo" width="120" />
</p>

<h1 align="center">Startup Next.js SaaS/Business Template</h1>

<p align="center">
  <b>Modern, production-ready Next.js template for SaaS, startups, and business websites.</b><br/>
  <a href="https://startup.nextjstemplates.com/">Live Demo</a> · <a href="#getting-started">Get Started</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-blue?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Links & Resources](#links--resources)

---

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for rapid UI development
- 🌗 **Dark & Light Mode** support
- 🛠️ **TypeScript** for type safety
- 🔒 **NextAuth.js** authentication ready
- 🧩 Modular, clean code structure
- 📱 Responsive & mobile-first design
- 📝 Blog, About, Contact, Pricing, and more
- 🧑‍💻 Easy to extend and customize

## Screenshots

<p align="center">
  <img src="public/images/hero/shape-01.svg" alt="Hero Screenshot" width="600" />
  <br/>
  <i>Modern, clean landing page design</i>
</p>

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS 3.4](https://tailwindcss.com/)
- [TypeScript 5.6](https://www.typescriptlang.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-org/startup-nextjs-template.git
cd startup-nextjs-template

# Install dependencies
pnpm install # or npm install or yarn install
```

### Development

```bash
pnpm dev # or npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
pnpm build # or npm run build
```

### Linting & Formatting

```bash
pnpm lint # or npm run lint
prettier --write .
```

### Deployment

- **Vercel:** Click the button below to deploy instantly.

  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-org%2Fstartup-nextjs-template)

- **Netlify:**

  [![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-org/startup-nextjs-template)

## Folder Structure

```
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── app/          # Next.js app directory (pages, layout, API routes)
│   ├── components/   # Reusable React components
│   ├── lib/          # Utility libraries (auth, posts, etc.)
│   ├── styles/       # Global styles (Tailwind, CSS)
│   └── types/        # TypeScript type definitions
├── .github/          # GitHub workflows & configs
├── package.json      # Project metadata & scripts
├── next.config.ts    # Next.js configuration
├── tailwind.config.js# Tailwind CSS config
├── tsconfig.json     # TypeScript config
└── LICENSE           # License file
```

## Usage

- Customize content in `src/app/` and `src/components/`.
- Update branding assets in `public/images/logo/`.
- Configure authentication in `src/app/api/auth/[...nextauth]/route.ts`.
- Add new pages or sections as needed.

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements.

- Follow the code style guidelines in [AGENTS.md](AGENTS.md)
- Run `pnpm lint` and `prettier --write .` before committing
- See [AGENTS.md](AGENTS.md) for commit and push instructions

## License

This project is licensed under the [MIT License](LICENSE).

## Links & Resources

- [Live Demo](https://startup.nextjstemplates.com/)
- [Documentation](https://nextjstemplates.com/docs)
- [Get Pro Version](https://nextjstemplates.com/templates/saas-starter-startup)
- [More Next.js Templates](https://nextjstemplates.com)

---

<p align="center">
  <i>Made with ❤️ using Next.js & Tailwind CSS</i>
</p>
