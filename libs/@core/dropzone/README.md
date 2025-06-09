# @inexture/dropzone

A lightweight and customizable dropzone library built on top of Mantine's dropzone component. It provides pre-configured dropzone components and utilities for seamless integration into React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/dropzone` for robust and flexible file dropzone management.
- **Customizable**: Easily customize dropzone behavior and appearance to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/dropzone

# Using npm
npm install @inexture/dropzone

# Using yarn
yarn add @inexture/dropzone
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

### 1. **Basic Dropzone**

Use the `@inexture/dropzone` library to create a basic dropzone in your React application.

```tsx
import React from "react";
import { Dropzone } from "@inexture/dropzone";

const App = () => {
  return (
    <Dropzone
      onDrop={(files) => console.log(files)}
      accept={["image/*"]}
      maxSize={3 * 1024 ** 2} // 3 MB
    >
      <div>Drag and drop files here, or click to select files</div>
    </Dropzone>
  );
};

export default App;
```

---

### 2. **Customizing Dropzone**

You can customize the dropzone's behavior and appearance by passing props.

```tsx
import React from "react";
import { Dropzone } from "@inexture/dropzone";

const App = () => {
  return (
    <Dropzone
      onDrop={(files) => console.log(files)}
      accept={["image/png", "image/jpeg"]}
      maxSize={5 * 1024 ** 2} // 5 MB
      multiple
    >
      <div>Drag and drop PNG or JPEG files here, or click to select files</div>
    </Dropzone>
  );
};

export default App;
```

---

### 3. **Using Types**

The library re-exports types from `@mantine/dropzone` for better type safety.

```tsx
import React from "react";
import { DropzoneProps } from "@inexture/dropzone";

const CustomDropzone = (props: DropzoneProps) => {
  return <Dropzone {...props} />;
};

export default CustomDropzone;
```

---

## License

This project is licensed under the MIT License.