import {
  Controller,
  ControllerProps,
  FieldValues,
  Path
} from 'react-hook-form';
import TextArea, {
  Props as TextAreaProps
} from 'components/FormElements/TextArea';

interface Props<
  TFormValues extends FieldValues,
  TName extends Path<TFormValues>
> extends Omit<ControllerProps<TFormValues, TName>, 'render'>,
    Omit<TextAreaProps, 'defaultValue' | 'name'> {}

const ControlledTextArea = <
  TFormValues extends FieldValues,
  TName extends Path<TFormValues>
>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<TFormValues, TName>) => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({
      field: { onBlur, onChange, value, ...field },
      fieldState: { error }
    }) => (
      <TextArea
        {...field}
        error={error?.message}
        {...(rules?.required ? { required: true } : {})}
        {...rest}
        onBlur={(event) => {
          onBlur?.();
          rest.onBlur?.(event);
        }}
        onChange={(event) => {
          onChange?.(event);
          rest.onChange?.(event);
        }}
        value={value || ''}
      />
    )}
    rules={rules}
    shouldUnregister={shouldUnregister}
  />
);

export default ControlledTextArea;
