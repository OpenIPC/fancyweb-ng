import type { InputProps } from './input-types';

export default function Input({ elemName, label, onInput, borderWidth, borderColor, dir, required, value, state, errorText }: InputProps) {

  const inputBorderColor: Record<InputProps['state'], string> = {
    default: '',
    valid: 'border-green',
    error: 'border-red',
    disabled: '',
  }


  const borderWidthClasses: Record<InputProps['borderWidth'], string> = {
    '1px': 'border',
    '4px': 'border-4',
  }

  const borderColorClasses: Record<InputProps['borderColor'], string> = {
    'default':  'border-wallet-border',
    'partition0': 'border-partition0',
    'partition1': 'border-partition1',
    'partition2': 'border-partition2',
    'partition3': 'border-partition3',
    'partition4': 'border-partition4',
    'partition5': 'border-partition5',
    'partition6': 'border-partition6',
    'partition7': 'border-partition7',
  }

  return (
    <div className={`border ${borderWidthClasses[borderWidth]} ${borderColorClasses[borderColor]} rounded-md flex flex-col has-focus:outline has-focus:outline-4 has-focus:outline-stages-border bg-wallet-bg`}>
      <label for={elemName} className="text-sm text-dark-grey ml-1 mt-0.5 truncate">{label}{required && <sup className="text-red"> *</sup>}</label>
      <input name={elemName} id={elemName} {...{dir, value, onInput}} className={`w-[94%] p-1 m-2 mb-0 font-mono text-xl h-7 border rounded focus:outline-none ${inputBorderColor[state]}`} />
      <p className="text-red text-xs pl-3 min-h-5">{state === 'error' && (errorText ?? '')}</p>
    </div>
  );
}
