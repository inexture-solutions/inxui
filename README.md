# Inxui

Inxui is a collection of composable UI and utility libraries for React applications, built on top of Mantine. Packages can be installed individually and combined to build modern interfaces.

## Installation

Install any package from the collection using **pnpm**:

```bash
pnpm add @inexture/<package>
```

Replace `<package>` with the library you need, such as `core`, `charts` or `form`.

## Quick Start

```tsx
import { ThemeProvider, Button } from '@inexture/core';

export default function App() {
  return (
    <ThemeProvider>
      <Button variant="filled">Hello world</Button>
    </ThemeProvider>
  );
}
```

## Packages

### @core

- [@inexture/carousel](libs/@core/carousel)
- [@inexture/charts](libs/@core/charts)
- [@inexture/core](libs/@core/core)
- [@inexture/dates](libs/@core/dates)
- [@inexture/dropzone](libs/@core/dropzone)
- [@inexture/highlight](libs/@core/highlight)
- [@inexture/modals](libs/@core/modals)
- [@inexture/spotlight](libs/@core/spotlight)
- [@inexture/tiptap](libs/@core/tiptap)

### @library

- [@inexture/form](libs/@library/form)

## Contributing

Contributions are welcome! Fork the repository, create a branch, and open a pull request. Please run `pnpm test` before submitting.

## License

This project is licensed under the [MIT License](LICENSE).

