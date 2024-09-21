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

export interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, label, ...rest }, ref) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [focused, setIsFocused] = useState(false);
    const [smallLabel, setSmallLabel] = useState(false);

    useImperativeHandle(
      ref,
      () => textAreaRef.current as HTMLTextAreaElement,
      []
    );

    useEffect(() => {
      textAreaRef.current?.value && setSmallLabel(true);
    }, [textAreaRef.current?.value]);

    return (
      <div className="mb-5 ">
        <div className="relative">
          <Text
            className={`absolute -translate-y-1/2 left-4 pointer-events-none transition-[0.3s] ${
              focused ? 'text-primary' : 'text-gray-500'
            } ${smallLabel ? 'top-3 left-[15px]' : 'top-7'}`}
            styling={smallLabel ? 'xs' : 'sm'}
            tag="span"
          >
            <label htmlFor={rest.id || rest.name}>{label}</label>
          </Text>
          <textarea
            ref={textAreaRef}
            className={inputClasses}
            id={rest.id || rest.name}
            rows={4}
            {...rest}
            onBlur={(e) => {
              !textAreaRef.current?.value && setSmallLabel(false);
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

export default TextArea;
