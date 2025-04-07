# 📦 InxUI

InxUI is a modular and customizable UI library built with React, designed to streamline the development of modern web applications. It provides a collection of reusable components, hooks, and utilities to enhance productivity and maintainability.

---

## 🚀 Features

- **Modular Design**: Organized into core and library packages for flexibility.
- **Customizable Themes**: Built-in support for theme customization using Mantine.
- **TypeScript Support**: Fully typed for better developer experience.
- **Modern Tooling**: Uses `tsup` for bundling and `pnpm` for dependency management.
- **MIT Licensed**: Open-source and free to use.


## 📂 Project Structure

The project is organized as a monorepo using `pnpm`. Below is an overview of the structure:

```plaintext
.
├── apps/
│   └── docs/          # Documentation site built with Next.js
├── libs/
│   ├── @core/         # Core UI components and utilities
│   ├── @library/      # Additional libraries and tools
├── .changeset/        # Changeset configuration for versioning
├── pnpm-workspace.yaml # Workspace configuration
└── LICENSE            # MIT License
```

---

## 🛠️ Installation

To get started, clone the repository and install dependencies using `pnpm`:

```bash
git clone https://github.com/inexture-solutions/inxui.git
cd inxui
pnpm install
```

---

## 📖 Usage

### Core Components

Import and use components from the `@core` library:

```tsx
import { Button } from "@inexture/base";

function App() {
  return <Button>Click Me</Button>;
}
```

### Theming

Customize the theme using the `CustomizerProvider`:

```tsx
import { CustomizerProvider } from "@inexture/base";

function App() {
  return (
    <CustomizerProvider>
      <YourComponent />
    </CustomizerProvider>
  );
}
```

---

## 📚 Documentation

The documentation site is located in the `apps/docs` folder. To run it locally:

```bash
cd apps/docs
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the documentation.

---

## 🧱 Development

### Build Packages

To build all packages:

```bash
pnpm build
```

### Linting

Run linting across the project:

```bash
pnpm lint
```

### Clean

Clean up build artifacts:

```bash
pnpm clean
```

---

## 📦 Packages

### Core Libraries

| Package          | Description                          |
|------------------|--------------------------------------|
| `@inexture/base` | Core components and utilities        |
| `@inexture/dates`| Date utilities and components        |
| `@inexture/charts`| Charting components                 |
| `@inexture/modals`| Modal components                    |

### Library Extensions

| Package             | Description                          |
|---------------------|--------------------------------------|
| `@inexture/toast`   | Toast notification system            |
| `@inexture/hook-form`| Form utilities with React Hook Form |

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## 📧 Support

For support or feedback, reach out to the [Inexture Team](https://www.inexture.com).

```
