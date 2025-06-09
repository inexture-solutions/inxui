# @inexture/tiptap

A rich text editor library built on top of Mantine's Tiptap integration. It provides pre-configured components, extensions, and utilities for seamless integration into React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/tiptap` for robust and flexible rich text editing.
- **Customizable**: Easily customize editor behavior, extensions, and appearance to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/tiptap

# Using npm
npm install @inexture/tiptap

# Using yarn
yarn add @inexture/tiptap
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

### 1. **Basic Rich Text Editor**

Use the `@inexture/tiptap` library to create a basic rich text editor in your React application.

```tsx
import React from "react";
import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const App = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello, World!</p>",
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
};

export default App;
```

---

### 2. **Customizing the Editor**

You can customize the editor's behavior and appearance by adding extensions and props.

```tsx
import React from "react";
import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const App = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p><u>Customizable Editor</u></p>",
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.Bold />
        <RichTextEditor.Italic />
        <RichTextEditor.Underline />
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
};

export default App;
```

---

### 3. **Using Types**

The library re-exports types from `@mantine/tiptap` and `@tiptap/react` for better type safety.

```tsx
import React from "react";
import { RichTextEditorProps } from "@mantine/tiptap";

const CustomEditor = (props: RichTextEditorProps) => {
  return <RichTextEditor {...props} />;
};

export default CustomEditor;
```

---

### 4. **Styles**

Ensure to include the styles in your project for proper editor rendering:

```css
@import "@inexture/tiptap/styles.css";
@import "@inexture/tiptap/styles.layer.css";
```

---

### 5. **Scripts**

The following scripts are available in the package:

- **build**: Builds the package and copies the required styles from `@mantine/tiptap`.
- **dev**: Runs the build process in watch mode.
- **lint**: Lints the codebase using ESLint.
- **clean**: Cleans up the build artifacts and dependencies.

---

## License

This project is licensed under the MIT License.