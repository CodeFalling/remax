import factory from './factory';

export interface TextProps {
  id?: string;
  className?: string;
  selectable?: boolean;
  space?: string;
  decode?: boolean;
  numberOfLines?: number;
}
const Text = factory<TextProps>('text');

export default Text;
