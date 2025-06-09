# @inexture/modals

A lightweight and customizable modals library built on top of Mantine's modals component. It provides pre-configured modal components and utilities for seamless integration into React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/modals` for robust and flexible modal management.
- **Customizable**: Easily customize modal behavior and appearance to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/modals

# Using npm
npm install @inexture/modals

# Using yarn
yarn add @inexture/modals
```

### Peer Dependencies

Make sure the following peer dependencies are installed in your project:

- `react`
- `react-dom`
- `@inexture/core`

You can install them using:

```bash
pnpm add react react-dom @inexture/core
```

---

## Usage

### 1. **Basic Modal**

Use the `@inexture/modals` library to create a basic modal in your React application.

```tsx
import React from "react";
import { ModalsProvider, useModals } from "@inexture/modals";

const App = () => {
  const modals = useModals();

  const openModal = () => {
    modals.open({
      title: "Example Modal",
      children: <div>This is a modal content</div>,
    });
  };

  return (
    <ModalsProvider>
      <button onClick={openModal}>Open Modal</button>
    </ModalsProvider>
  );
};

export default App;
```

---

### 2. **Customizing Modal**

You can customize the modal's behavior and appearance by passing props.

```tsx
import React from "react";
import { ModalsProvider, useModals } from "@inexture/modals";

const App = () => {
  const modals = useModals();

  const openCustomModal = () => {
    modals.open({
      title: "Custom Modal",
      size: "lg",
      centered: true,
      children: <div>Custom modal content with larger size</div>,
    });
  };

  return (
    <ModalsProvider>
      <button onClick={openCustomModal}>Open Custom Modal</button>
    </ModalsProvider>
  );
};

export default App;
```

---

### 3. **Using Types**

The library re-exports types from `@mantine/modals` for better type safety.

```tsx
import React from "react";
import { ModalsProviderProps } from "@inexture/modals";

const CustomModalsProvider = (props: ModalsProviderProps) => {
  return <ModalsProvider {...props} />;
};

export default CustomModalsProvider;
```

---

### 4. **Styles**

Ensure to include the styles in your project for proper modal rendering:

```css
@import "@inexture/modals/styles.css";
or
@import "@inexture/modals/styles.layer.css";
```

---

### 5. **Scripts**

The following scripts are available in the package:

- **build**: Builds the package and copies the required styles from `@mantine/modals`.
- **dev**: Runs the build process in watch mode.
- **lint**: Lints the codebase using ESLint.
- **test**: Runs the unit tests for the package.
- **clean**: Cleans up the build artifacts and dependencies.

---

## License

This project is licensed under the MIT License.