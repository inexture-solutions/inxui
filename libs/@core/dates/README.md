# @inexture/dates

A lightweight and customizable date management library built on top of Mantine's date components. It provides pre-configured date utilities and components for seamless integration into React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/dates` for robust and flexible date management.
- **Customizable**: Easily customize date pickers and utilities to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/dates

# Using npm
npm install @inexture/dates

# Using yarn
yarn add @inexture/dates
```

### Peer Dependencies

Make sure the following peer dependencies are installed in your project:

- `react`
- `react-dom`
- `@inexture/core`
- `dayjs`

You can install them using:

```bash
pnpm add react react-dom @inexture/core dayjs
```

---

## Usage

### 1. **Basic Date Picker**

Use the `@inexture/dates` library to create a basic date picker in your React application.

```tsx
import React from "react";
import { DatePicker } from "@inexture/dates";

const App = () => {
  return (
    <DatePicker
      label="Pick a date"
      placeholder="Select a date"
      value={new Date()}
      onChange={(date) => console.log(date)}
    />
  );
};

export default App;
```

---

### 2. **Customizing Date Picker**

You can customize the date picker's behavior and appearance by passing props.

```tsx
import React from "react";
import { DatePicker } from "@inexture/dates";

const App = () => {
  return (
    <DatePicker
      label="Pick a date"
      placeholder="Select a date"
      value={new Date()}
      onChange={(date) => console.log(date)}
      minDate={new Date(2023, 0, 1)}
      maxDate={new Date(2025, 11, 31)}
      withTime
    />
  );
};

export default App;
```

---

### 3. **Using Types**

The library re-exports types from `@mantine/dates` for better type safety.

```tsx
import React from "react";
import { DatePickerProps } from "@inexture/dates";

const CustomDatePicker = (props: DatePickerProps) => {
  return <DatePicker {...props} />;
};

export default CustomDatePicker;
```

---

## License

This project is licensed under the MIT License.