import type {
  TextInputProps,
  CheckboxProps,
  NumberInputProps,
  PasswordInputProps,
  TextProps,
  PinInputProps,
  RadioGroupProps,
  ComboboxData,
  RatingProps,
  SegmentedControlProps,
  SelectProps,
  MultiSelectProps,
  NativeSelectProps,
  TextareaProps,
  SwitchProps,
  SwitchGroupProps,
  RangeSliderProps,
  SliderProps,
  JsonInputProps,
  FileInputProps,
  ColorInputProps,
  ColorPickerProps,
  ChipProps,
  ChipGroupProps,
  CheckboxGroupProps,
} from "@inexture/base";
import type { ReactNode } from "react";
import type { DateInputProps, DateTimePickerProps } from "@inexture/dates";
import type { DropzoneProps } from "@inexture/dropzone";

type WithDataTestId<T> = T & { "data-test-id"?: string };

export interface BaseFormI {
  name: string;
  label?: string;
}
export interface ComboboxItem {
  value: string;
  label: string;
}
export interface TextInputI extends BaseFormI {
  props?: Partial<WithDataTestId<TextInputProps>>;
}
export interface CheckboxI extends BaseFormI {
  props?: Partial<WithDataTestId<CheckboxProps>>;
}
export interface NumberInputI extends BaseFormI {
  props?: Partial<WithDataTestId<NumberInputProps>>;
}
export interface PasswordI extends BaseFormI {
  props?: Partial<WithDataTestId<PasswordInputProps>>;
}
export interface PinInputI extends BaseFormI {
  labelProps?: Partial<WithDataTestId<TextProps>>;
  props?: Partial<WithDataTestId<PinInputProps>>;
}
export interface RadioGroupI extends BaseFormI {
  props?: Partial<WithDataTestId<RadioGroupProps>>;
  options: ComboboxItem[];
}
export interface CheckboxGroupI extends BaseFormI {
  props?: Partial<WithDataTestId<CheckboxGroupProps>>;
  options: ComboboxItem[];
  inline?: boolean;
}

export interface RatingI extends BaseFormI {
  labelProps?: Partial<WithDataTestId<TextProps>>;
  props?: Partial<WithDataTestId<RatingProps>>;
}
export interface SegmentedControlI extends Omit<BaseFormI, "label"> {
  data: { label: string | ReactNode; value: string }[];
  props?: Partial<WithDataTestId<SegmentedControlProps>>;
}
export interface SelectI extends BaseFormI {
  data?: ComboboxData;
  props?: Partial<WithDataTestId<SelectProps>>;
}
export interface MultiSelectI extends BaseFormI {
  data?: ComboboxData;
  props?: Partial<WithDataTestId<MultiSelectProps>>;
}
export interface NativeSelectI extends BaseFormI {
  data?: ComboboxData;
  props?: Partial<WithDataTestId<NativeSelectProps>>;
}
export interface TextAreaI extends BaseFormI {
  props?: Partial<WithDataTestId<TextareaProps>>;
  placeholder?: string;
  disabled?: boolean;
}
export interface SwitchI extends BaseFormI {
  props?: Partial<WithDataTestId<SwitchProps>>;
}
export interface SwitchGroupI extends BaseFormI {
  data: { label: string; value: string }[];
  inline?: boolean;
  props?: Partial<WithDataTestId<SwitchGroupProps>>;
}
export interface RangeSliderI extends BaseFormI {
  data: { label: string; value: number }[];
  props?: Partial<WithDataTestId<RangeSliderProps>>;
}
export interface SliderI extends BaseFormI {
  data: { value: number }[];
  labelProps?: Partial<WithDataTestId<TextProps>>;
  props?: Partial<WithDataTestId<SliderProps>>;
}
export interface JsonInputI extends BaseFormI {
  props?: Partial<WithDataTestId<JsonInputProps>>;
}
export interface FileInputI extends BaseFormI {
  props?: Partial<WithDataTestId<FileInputProps>>;
}
export interface ColorInputI extends BaseFormI {
  props?: Partial<WithDataTestId<ColorInputProps>>;
}
export interface ColorPickerI extends Omit<BaseFormI, "label"> {
  props?: Partial<WithDataTestId<ColorPickerProps>>;
}
export interface ChipI extends BaseFormI {
  props?: Partial<WithDataTestId<ChipProps>>;
}
export interface ChipGroupI<T extends boolean>
  extends Omit<BaseFormI, "label"> {
  data: { label: string; value: string | number }[];
  inline?: boolean;
  props?: Partial<WithDataTestId<ChipGroupProps<T>>>;
}
export interface DateInputI extends BaseFormI {
  props?: Partial<WithDataTestId<DateInputProps>>;
}
export interface DateTimePickerI extends BaseFormI {
  props?: Partial<WithDataTestId<DateTimePickerProps>>;
}
export interface FileUploadI {
  name: string;
  accept: string[];
  allowedMessage: string;
  withAsterisk?: boolean;
  label?: string;
  pickFileSize?: boolean;
  fileSize?: number;
  props?: Partial<WithDataTestId<DropzoneProps>>;
  cardHeight?: number;
}
