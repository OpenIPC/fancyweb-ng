import type { SelectProps } from './select-types';
import CustomSelect from '../../../../../../../components/ui/form-elems/customSelect';

export default function Select({ elemName, value, label, options, required, onChange, state, errorText, open }: SelectProps) {

  return (
    <div className="rounded-md flex flex-col bg-wallet-bg w-full border border-wallet-border">
      <p className="text-sm text-dark-grey ml-1 mt-0.5 w-fit truncate">{label}{required && <sup className="text-red"> *</sup>}</p>
      <div className="m-2 mb-0">
        <CustomSelect {...{elemName, value, state, options, onChange, open}} size='sm' />
      </div>
      <p className="text-red text-xs pl-3 min-h-5">{state === 'error' && (errorText ?? '')}</p>
    </div>
  );
}
