# @inexture/charts

A lightweight and customizable charting library built on top of Mantine's chart components. This library provides seamless integration with Mantine's ecosystem, offering pre-configured chart components and utilities for React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/charts` for a robust and flexible charting experience.
- **Customizable**: Easily customize chart styles and behavior to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/charts

# Using npm
npm install @inexture/charts

# Using yarn
yarn add @inexture/charts
```

---

## Usage

### 1. **Basic Chart**

Use the `@inexture/charts` library to create a basic chart in your React application.

```tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "@inexture/charts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
];

const App = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default App;
```

---

### 2. **Customizing Charts**

You can customize the chart's behavior and appearance by passing props.

```tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "@inexture/charts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
];

const App = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default App;
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.