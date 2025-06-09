# @inexture/spotlight

A lightweight and customizable spotlight search library built on top of Mantine's spotlight component. It provides pre-configured components and utilities for seamless integration into React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/spotlight` for robust and flexible spotlight search functionality.
- **Customizable**: Easily customize spotlight behavior and appearance to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/spotlight

# Using npm
npm install @inexture/spotlight

# Using yarn
yarn add @inexture/spotlight
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

### 1. **Basic Spotlight**

Use the `@inexture/spotlight` library to create a basic spotlight search in your React application.

```tsx
import React from "react";
import { SpotlightProvider, useSpotlight } from "@inexture/spotlight";

const App = () => {
  const spotlight = useSpotlight();

  return (
    <SpotlightProvider actions={spotlight.actions}>
      <button onClick={spotlight.open}>Open Spotlight</button>
    </SpotlightProvider>
  );
};

export default App;
```

---

### 2. **Customizing Spotlight**

You can customize the spotlight's behavior and appearance by passing props.

```tsx
import React from "react";
import { SpotlightProvider, useSpotlight } from "@inexture/spotlight";

const App = () => {
  const spotlight = useSpotlight();

  return (
    <SpotlightProvider
      actions={spotlight.actions}
      searchPlaceholder="Search for anything..."
      shortcut="mod + K"
    >
      <button onClick={spotlight.open}>Open Spotlight</button>
    </SpotlightProvider>
  );
};

export default App;
```

---

### 3. **Using Types**

The library re-exports types from `@mantine/spotlight` for better type safety.

```tsx
import React from "react";
import { SpotlightAction } from "@inexture/spotlight";

const actions: SpotlightAction[] = [
  {
    title: "Search",
    onTrigger: () => console.log("Search triggered"),
  },
];

export default actions;
```

---

### 4. **Styles**

Ensure to include the styles in your project for proper spotlight rendering:

```css
@import "@inexture/spotlight/styles.css";
@import "@inexture/spotlight/styles.layer.css";
```

---

### 5. **Scripts**

The following scripts are available in the package:

- **build**: Builds the package and copies the required styles from `@mantine/spotlight`.
- **dev**: Runs the build process in watch mode.
- **lint**: Lints the codebase using ESLint.
- **test**: Runs the unit tests for the package.
- **clean**: Cleans up the build artifacts and dependencies.

---

## License

This project is licensed under the MIT License.
