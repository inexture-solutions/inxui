# @inexture/carousel

A lightweight and customizable carousel library built on top of Mantine's carousel component. This library provides a seamless integration with Mantine's ecosystem, offering pre-configured carousel components and utilities for React applications.

---

## Features

- **Mantine Integration**: Built on top of `@mantine/carousel` for a robust and flexible carousel experience.
- **Customizable**: Easily customize styles and behavior to fit your application's needs.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Minimal dependencies for fast and efficient performance.

---

## Installation

Install the library using `pnpm`, `npm`, or `yarn`:

```bash
# Using pnpm
pnpm add @inexture/carousel

# Using npm
npm install @inexture/carousel

# Using yarn
yarn add @inexture/carousel
```

---

## Usage

### 1. **Basic Carousel**

Use the `@inexture/carousel` library to create a basic carousel in your React application.

```tsx
import React from "react";
import { Carousel } from "@inexture/carousel";

const App = () => {
  return (
    <Carousel>
      <Carousel.Slide>Slide 1</Carousel.Slide>
      <Carousel.Slide>Slide 2</Carousel.Slide>
      <Carousel.Slide>Slide 3</Carousel.Slide>
    </Carousel>
  );
};

export default App;
```

---

### 2. **Customizing Carousel**

You can customize the carousel's behavior and appearance by passing props.

```tsx
import React from "react";
import { Carousel } from "@inexture/carousel";

const App = () => {
  return (
    <Carousel
      loop
      align="center"
      slideSize="50%"
      slidesToScroll={1}
      withIndicators
    >
      <Carousel.Slide>Slide 1</Carousel.Slide>
      <Carousel.Slide>Slide 2</Carousel.Slide>
      <Carousel.Slide>Slide 3</Carousel.Slide>
    </Carousel>
  );
};

export default App;
```

---

### 3. **Using Types**

The library re-exports types from `@mantine/carousel` for better type safety.

```tsx
import React from "react";
import { CarouselProps } from "@inexture/carousel";

const CustomCarousel = (props: CarouselProps) => {
  return <Carousel {...props} />;
};

export default CustomCarousel;
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

This project is licensed under the MIT License.