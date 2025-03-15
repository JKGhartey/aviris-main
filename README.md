# Aviris UI Component Library

![Static Badge](https://img.shields.io/badge/React-18.x-blue)
![Static Badge](https://img.shields.io/badge/TypeScript-5.x-blue)
![Static Badge](https://img.shields.io/badge/shadcn%2Fui-2.1.2-blue?link=https%3A%2F%2Fgithub.com%2Fshadcn%2Fui)
![Static Badge](https://img.shields.io/badge/Turborepo-latest-blue)

A modern, accessible, and customizable React component library built with shadcn/ui and Turborepo.

## 🌟 Features

- 🎨 Modern and customizable UI components
- 📱 Fully responsive design
- ♿ Accessibility first
- 🚀 Powered by shadcn/ui
- 🔧 Built with TypeScript
- 📦 Monorepo architecture with Turborepo
- 🎯 Zero-runtime CSS with Tailwind
- 📄 Comprehensive documentation

## 📦 Packages

This monorepo includes the following packages:

- `@aviris/ui`: Core React component library
- `@aviris/eslint-config`: Shared ESLint configurations
- `@aviris/typescript-config`: Shared TypeScript configurations
- `docs`: Next.js documentation site

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/aviris/aviris-ui.git

# Install dependencies
cd aviris-ui
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test
```

## 🔧 Development Tools

This project uses several development tools:

- [TypeScript](https://www.typescriptlang.org/) for type safety
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Turborepo](https://turbo.build/repo) for monorepo management
- [shadcn/ui](https://ui.shadcn.com) for component foundations

### Adding New Components

```bash
# Add a new shadcn/ui component
pnpm ui add <component-name>

# Create a new workspace
pnpm turbo gen workspace --name <workspace-name>
```

### Remote Caching

Enable remote caching with Vercel:

```bash
# Login to Vercel
npx turbo login

# Link to remote cache
npx turbo link
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 👥 Team

The Aviris UI library is maintained by the Aviris team. We're committed to creating high-quality, accessible React components for modern web applications.

## 💬 Support

- 📧 Email: support@aviris.com
- 💻 GitHub Issues: [Create an issue](https://github.com/aviris/aviris-ui/issues)
- 📝 Documentation: [View docs](https://docs.aviris.com)

---

Built with ❤️ by the Aviris team
