import factory from './factory';

export interface PickerProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
const Picker = factory<PickerProps>('picker');

export default Picker;
