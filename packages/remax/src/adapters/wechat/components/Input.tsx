import React, { CSSProperties, FunctionComponent, useState } from 'react';
import propsAlias from './propsAlias';

export interface InputProps {
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
  confirmType: 'send' | 'search' | 'next' | 'go' | 'done';
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  placeholder?: string;
  placeholderStyle?: CSSProperties;
  placeholderClass?: string;
  disabled?: boolean;
  cursorSpacing?: number;
  onInput?: (...params: any) => void;
  onClick?: (...params: any) => void;
  onFocus?: (...params: any) => void;
  onBlur?: () => void;
  onConfirm?: () => void;
  onKeyboardHeightChange?: () => void;
}

interface State {
  focus: boolean;
}

function useInnerFocus(
  initialValue?: boolean
): [boolean, typeof handleInnerFocus] {
  const [innerFocus = false, setInnerFocus] = useState(initialValue);

  const handleInnerFocus = (func?: Function) => (...params: any) => {
    if (!innerFocus) {
      setInnerFocus(true);
    }

    if (typeof func === 'function') {
      return func(...params);
    }
  };

  return [innerFocus, handleInnerFocus];
}

const Input: FunctionComponent<InputProps> = props => {
  const {
    autoFocus,
    children,
    focus,
    onInput,
    onClick,
    onFocus,
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
  });

  return React.createElement('input', inputProps, children);
};

Input.defaultProps = {
  maxlength: -1,
};

export default Input;
