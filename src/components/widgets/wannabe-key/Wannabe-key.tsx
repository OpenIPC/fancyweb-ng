export default function WannabeKey({ caption }: { caption: string }) {
  return (
    <span className="border border-grey rounded text-dark-grey text-sm font-bold py-0.5 px-2 bg-linear-to-t from-wallet-border to-grey-bg">{caption}</span>
  );
}
