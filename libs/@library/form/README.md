# @inexture/form

A comprehensive library of form components built with Mantine and React Hook Form. It provides pre-configured components, utilities, and wrappers for seamless form management in React applications.

---

## Installation

Install the package using npm or yarn:

```bash
npm install @inexture/form
# or
yarn add @inexture/form
```

### Peer Dependencies

Make sure the following peer dependencies are installed in your project:

- `react`
- `react-dom`
- `@inexture/core`

You can install them using:

```bash
npm install react react-dom @inexture/core
```

---

## Components

Below is the list of components provided by the library:

### Input Components
- **TextInput**: A basic text input field.
- **PhoneInput**: A phone number input field with country code support.
- **NumberInput**: A numeric input field.

### Checkbox Components
- **Checkbox**: A single checkbox input.
- **CheckboxGroup**: A group of checkboxes.

### Chip Components
- **Chip**: A single chip component.
- **ChipGroup**: A group of chips.

### Color Components
- **ColorInput**: A color input field.
- **ColorPicker**: A color picker component.

### File Components
- **FileInput**: A file input field.
- **FileUpload**: A drag-and-drop file upload component.

### JSON Component
- **JsonInput**: A JSON input field.

### Password Component
- **PasswordInput**: A password input field.

### Pin Component
- **PinInput**: A pin input field.

### Radio Components
- **RadioGroup**: A group of radio buttons.

### Rating Component
- **Rating**: A star rating component.

### Segment Component
- **SegmentedControl**: A segmented control component.

### Select Components
- **Select**: A dropdown select field.
- **NativeSelect**: A native dropdown select field.
- **MultiSelect**: A multi-select dropdown field.

### Slider Components
- **Slider**: A slider input field.
- **RangeSlider**: A range slider input field.

### Switch Components
- **Switch**: A toggle switch.
- **SwitchGroup**: A group of toggle switches.

### Textarea Component
- **Textarea**: A multi-line text input field.

### Date Components
- **DateInput**: A date input field.
- **DatePicker**: A date picker component.
- **DatePickerInput**: A date picker input field.
- **DateTimePicker**: A date and time picker component.

### Upload Component
- **FileUpload**: A drag-and-drop file upload component with preview support.

---

## Key Wrappers and Utilities

### 1. **FormProvider**

The `FormProvider` is a wrapper for managing form state using React Hook Form. It simplifies form handling and submission.

#### Example:

```tsx
import React from "react";
import { useForm, FormProvider } from "@inexture/form/providers";
import { TextInput } from "@inexture/form";

const App = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <TextInput name="example" label="Example Input" />
      <button type="submit">Submit</button>
    </FormProvider>
  );
};

export default App;
```

---

### 2. **Resolvers**

The library provides built-in support for schema validation using `zod` and `yup` resolvers.

#### Example with Zod:

```tsx
import React from "react";
import { useForm, FormProvider } from "@inexture/form/providers";
import { z } from "zod";
import { zodResolver } from "@inexture/form/plugins";
import { TextInput } from "@inexture/form";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const App = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <TextInput name="email" label="Email Address" />
      <button type="submit">Submit</button>
    </FormProvider>
  );
};

export default App;
```

---

### 3. **TextInput**

A basic wrapper around Mantine's `TextInput` component, integrated with React Hook Form.

#### Example:

```tsx
import React from "react";
import { TextInput } from "@inexture/form";

const App = () => {
  return <TextInput name="example" label="Example Input" />;
};

export default App;
```

---

### 4. **FileUpload**

A drag-and-drop file upload component with preview support.

#### Example:

```tsx
import React from "react";
import { FileUpload } from "@inexture/form";

const App = () => {
  return <FileUpload name="files" label="Upload Files" />;
};

export default App;
```

---

### 5. **DateInput**

A date input field integrated with React Hook Form.

#### Example:

```tsx
import React from "react";
import { DateInput } from "@inexture/form";

const App = () => {
  return <DateInput name="date" label="Select Date" />;
};

export default App;
```

---

## License

This project is licensed under the MIT License.
