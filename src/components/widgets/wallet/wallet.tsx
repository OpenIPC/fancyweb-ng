import { WalletProps } from './types/wallet-types';
import currencyIcons from '../../../assets/icons/currency';

export default function Wallet({title, address, icon}: WalletProps) {
  const Icon = currencyIcons[icon];
  return (
    <div className="flex flex-col border gap-y-3 bg-wallet-bg border-wallet-border rounded p-4">
      <div className="flex flex-row">
        <p className="text-lg font-bold grow shrink">{title}</p>
        <div className="*:h-6 *:w-6">
          <Icon />
        </div>
      </div>
      <p className="text-base w-full text-black break-all opacity-75">{address}</p>
    </div>
  );
}
