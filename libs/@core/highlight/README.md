# @inexture/highlight

A lightweight and customizable syntax highlighting library built on top of Mantine's code highlight component. It provides pre-configured components and utilities for seamless integration into React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/code-highlight` for robust and flexible syntax highlighting.
- **Customizable**: Easily customize syntax highlighting styles and behavior to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/highlight

# Using npm
npm install @inexture/highlight

# Using yarn
yarn add @inexture/highlight
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

### 1. **Basic Syntax Highlighting**

Use the `@inexture/highlight` library to create a basic syntax highlighting component in your React application.

```tsx
import React from "react";
import { CodeHighlight } from "@inexture/highlight";

const App = () => {
  return (
    <CodeHighlight language="javascript">
      {`const greet = () => console.log("Hello, World!");`}
    </CodeHighlight>
  );
};

export default App;
```

---

### 2. **Customizing Syntax Highlighting**

You can customize the syntax highlighting styles and behavior by passing props.

```tsx
import React from "react";
import { CodeHighlight } from "@inexture/highlight";

const App = () => {
  return (
    <CodeHighlight
      language="typescript"
      withLineNumbers
      highlightLines={[2]}
    >
      {`const greet = () => {
  console.log("Hello, World!");
};`}
    </CodeHighlight>
  );
};

export default App;
```

---

### 3. **Using Types**

The library re-exports types from `@mantine/code-highlight` for better type safety.

```tsx
import React from "react";
import { CodeHighlightProps } from "@inexture/highlight";

const CustomCodeHighlight = (props: CodeHighlightProps) => {
  return <CodeHighlight {...props} />;
};

export default CustomCodeHighlight;
```

---

## License

This project is licensed under the MIT License.