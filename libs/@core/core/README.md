# @inexture/core

A core library for building customizable UI components and themes using Mantine. This library provides pre-configured components, utilities, and theme management for seamless integration into your projects.

---

## Features

- **Customizable Components**: Pre-styled components like buttons, inputs, modals, tables, and more.
- **Theme Management**: Easily manage and customize themes with support for color schemes, radius, and other design tokens.
- **Mantine Integration**: Built on top of Mantine for a robust and flexible UI foundation.
- **Utilities**: Helper utilities for toggling modes, managing themes, and more.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/core

# Using npm
npm install @inexture/core

# Using yarn
yarn add @inexture/core
```

---

## Usage

### 1. **Theme Provider**

Wrap your application with the `ThemeProvider` to enable theme customization and management.

```jsx
import React from "react";
import { ThemeProvider } from "@inexture/core";

const App = () => {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
};

export default App;
```

---

### 2. **Using Pre-Styled Components**

The library provides pre-configured components that can be used directly in your application.

#### Example: Button

```jsx
import React from "react";
import { Button } from "@inexture/core";

const App = () => {
  return <Button variant="filled" color="primary">Click Me</Button>;
};

export default App;
```

#### Example: Input

```jsx
import React from "react";
import { TextInput } from "@inexture/core";

const App = () => {
  return <TextInput label="Name" placeholder="Enter your name" />;
};

export default App;
```

---

### 3. **Theme Customization**

Use the `ThemeCustomizer` component to allow users to customize the theme dynamically.

```jsx
import React from "react";
import { ThemeCustomizer } from "@inexture/core";

const App = () => {
  return <ThemeCustomizer />;
};

export default App;
```

---

### 4. **Toggle Dark/Light Mode**

Use the `ToggleMode` utility to switch between dark and light modes.

```jsx
import React from "react";
import { ToggleMode } from "@inexture/core";

const App = () => {
  return <ToggleMode />;
};

export default App;
```

---

## Folder Structure

```
libs/@core/base/
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── src/
│   ├── index.tsx
│   ├── components/
│   │   ├── index.tsx
│   │   ├── badge/
│   │   │   └── theme-badge.ts
│   │   ├── button/
│   │   │   └── theme-button.ts
│   │   ├── card/
│   │   ├── colors/
│   │   ├── drawer/
│   │   ├── input/
│   │   ├── modal/
│   │   ├── overlay/
│   │   ├── paper/
│   │   ├── popover/
│   │   ├── switch/
│   │   ├── table/
│   │   └── tooltip/
│   ├── plugins/
│   │   ├── index.tsx
│   │   └── iconify/
│   ├── providers/
│   │   ├── index.tsx
│   │   └── ThemeProvider.tsx
│   ├── store/
│   │   ├── index.tsx
│   │   └── theme.store.ts
│   ├── theme/
│   │   ├── index.tsx
│   │   ├── config/
│   │   └── customizer/
│   ├── types/
│   │   ├── index.d.ts
│   │   └── index.type.ts
│   └── utils/
│       ├── index.tsx
│       └── ToggleMode.tsx
```

---

## Development

### Scripts

- **Build**: Build the library using `tsup`.
  ```bash
  pnpm run build
  ```
- **Dev**: Watch for changes and rebuild the library.
  ```bash
  pnpm run dev
  ```
- **Lint**: Run ESLint to check for code quality issues.
  ```bash
  pnpm run lint
  ```
- **Clean**: Remove build artifacts and dependencies.
  ```bash
  pnpm run clean
  ```

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.