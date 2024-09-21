import { inputClasses } from 'components/const';
import Text from 'components/Text';
import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, label, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setIsFocused] = useState(false);
    const [smallLabel, setSmallLabel] = useState(false);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    useEffect(() => {
      inputRef.current?.value && setSmallLabel(true);
    }, [inputRef.current?.value]);

    return (
      <div className="mb-5">
        <div className="relative">
          <Text
            className={`absolute -translate-y-1/2 left-4 pointer-events-none transition-[0.3s] ${
              focused ? 'text-primary' : 'text-gray-500'
            } ${smallLabel ? 'top-3 left-[15px]' : 'top-1/2'}`}
            styling={smallLabel ? 'xs' : 'sm'}
            tag="span"
          >
            <label htmlFor={rest.id || rest.name}>{label}</label>
          </Text>
          <input
            ref={inputRef}
            className={inputClasses}
            id={rest.id || rest.name}
            {...rest}
            onBlur={(e) => {
              !inputRef.current?.value && setSmallLabel(false);
              setIsFocused(false);
              rest.onBlur?.(e);
            }}
            onFocus={(e) => {
              setIsFocused(true);
              setSmallLabel(true);
              rest.onFocus?.(e);
            }}
          />
        </div>
        {error && (
          <Text className="mt-1 ml-3 text-red-700" styling="sm">
            {error}
          </Text>
        )}
      </div>
    );
  }
);

export default Input;
