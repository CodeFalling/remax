import React, {
  CSSProperties,
  FunctionComponent,
  useState,
  forwardRef,
} from 'react';
import propsAlias from './propsAlias';

export interface InputProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  autoFocus?: boolean;
  className?: string;
  focus?: boolean;
  name?: string;
  maxlength?: number;
  value: any;
  style?: CSSProperties;
  password?: string;
  type: 'text' | 'number' | 'idcard' | 'digit';
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  placeholder?: string;
  placeholderStyle?: CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  cursorSpacing?: number;
  onInput?: (...params: any) => void;
  onClick?: (...params: any) => void;
  onFocus?: (...params: any) => void;
  onBlur?: (...params: any) => void;
  onConfirm?: (event: any) => any;
  onKeyboardHeightChange?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

function useInnerFocus(
  initialValue?: boolean
): [boolean, typeof handleInnerFocus] {
  const [innerFocus = false, setInnerFocus] = useState(initialValue);

  const handleInnerFocus = (func?: Function, focus = true) => (
    ...params: any
  ) => {
    if (innerFocus !== focus) {
      setInnerFocus(focus);
    }

    if (typeof func === 'function') {
      return func(...params);
    }
  };

  return [innerFocus, handleInnerFocus];
}

const InputRender: FunctionComponent<InputProps> = (props, ref) => {
  const {
    autoFocus,
    children,
    focus,
    onInput,
    onClick,
    onFocus,
    onBlur,
    ...restProps
  } = props;
  const [innerFocus, handleInnerFocus] = useInnerFocus(focus || autoFocus);

  const inputProps = propsAlias({
    ...restProps,
    autoFocus,
    focus: innerFocus,
    onInput: handleInnerFocus(onInput),
    onClick: handleInnerFocus(onClick),
    onFocus: handleInnerFocus(onFocus),
    onBlur: handleInnerFocus(onBlur, false),
    ref,
  });

  return React.createElement('input', inputProps, children);
};

const Input = forwardRef(InputRender);

Input.defaultProps = {
  maxlength: -1,
  selectionEnd: 999,
  selectionStart: 999,
};

export default Input;
