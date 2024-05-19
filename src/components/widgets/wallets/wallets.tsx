import Wallet from '../wallet/wallet';
import { walletConstants } from './constants/wallet-constants';
import H2 from '../../ui/headers/h2';

export default function Wallets() {
  return (
    <div className="flex flex-col gap-y-2 w-full max-w-96">
      <H2 content="Donate Cryptocurrency"/>
      {walletConstants.map(cur => <Wallet title={cur.title} address={cur.address} icon={cur.icon} />)}
      <p className="text-[13px]">Using TON cryptocurrency, donations can be made right inside the Telegram using <a className="text-brand-blue underline" href="https://t.me/wallet">@wallet</a>.</p>
    </div>
  );
}
