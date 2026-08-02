export default function WalletCard({wallet}) {
  return (
    <div className="wallet-card">
      <h3>Wallet</h3>
      <p>Balance: ${wallet.balance.toFixed(2)}</p>
    </div>
  );
}
