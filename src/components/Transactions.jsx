export default function Transactions({transactions}) {
  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.merchant}</td>
              <td>${tx.amount.toFixed(2)}</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
