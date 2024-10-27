import { FC, ReactNode, HTMLProps, createElement } from 'react';

type Styling = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'sm' | 'xs';
type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface Props extends HTMLProps<HTMLDivElement> {
  bold?: boolean;
  children?: ReactNode;
  separator?: 'narrow' | 'wide';
  styling?: Styling;
  tag?: TagType;
}

const styles = {
  h1: { bold: 'font-bold', class: 'text-4xl lg:text-5xl' },
  h2: { bold: 'font-bold', class: 'text-3xl lg:text-4xl' },
  h3: { bold: 'font-bold', class: 'text-2xl lg:text-3xl' },
  h4: { bold: 'font-bold', class: 'text-xl lg:text-2xl' },
  h5: { bold: 'font-regular', class: 'text-md lg:text-lg' },
  p: { bold: '', class: 'text-base' },
  sm: { bold: '', class: 'text-sm' },
  span: { bold: '', class: 'text-base' },
  xs: { bold: '', class: 'text-xs' }
};

const getIsBold = (tag: TagType, styling?: Styling, bold?: boolean) => {
  if (typeof bold === 'undefined') {
    return styling ? styles[styling].bold : styles[tag].bold;
  }
  return bold ? 'font-bold' : '';
};

const getClassName = (
  tag: TagType,
  className?: string,
  styling?: Styling,
  bold?: boolean
) =>
  `${styles[styling || tag].class} ${className || ''} ${getIsBold(
    tag,
    styling,
    bold
  )}`.trim();

const Text: FC<Props> = ({
  bold,
  children,
  separator,
  styling,
  tag = 'p',
  ...rest
}) => (
  <>
    {createElement(
      tag,
      {
        ...rest,
        className: getClassName(tag, rest.className, styling, bold)
      },
      children
    )}
    {separator && (
      <div
        className={`h-[3px] bg-primary-dark rounded-[2px] ${
          separator === 'wide' ? 'w-24 my-6' : 'w-12 my-3'
        }`}
      />
    )}
  </>
);

export default Text;
