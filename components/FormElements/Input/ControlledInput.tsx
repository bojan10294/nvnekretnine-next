import {
  Controller,
  ControllerProps,
  FieldValues,
  Path
} from 'react-hook-form';
import Input, { Props as InputProps } from 'components/FormElements/Input';

interface Props<
  TFormValues extends FieldValues,
  TName extends Path<TFormValues>
> extends Omit<ControllerProps<TFormValues, TName>, 'render'>,
    Omit<InputProps, 'defaultValue' | 'name'> {}

const ControlledInput = <
  TFormValues extends FieldValues,
  TName extends Path<TFormValues>
>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...textFieldProps
}: Props<TFormValues, TName>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({
      field: { onBlur, onChange, value, ...field },
      fieldState: { error }
    }) => (
      <Input
        {...field}
        error={error?.message}
        {...(rules?.required ? { required: true } : {})}
        {...textFieldProps}
        onBlur={(event) => {
          onBlur?.();
          textFieldProps.onBlur?.(event);
        }}
        onChange={(event) => {
          onChange?.(event);
          textFieldProps.onChange?.(event);
        }}
        value={value || ''}
      />
    )}
    rules={rules}
    shouldUnregister={shouldUnregister}
  />
);

export default ControlledInput;
