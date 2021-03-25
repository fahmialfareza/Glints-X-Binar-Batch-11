import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTransactions } from "../../actions/transactionActions";
import TransactionItem from "./TransactionItem";

const Transaction = ({
  transaction: { allTransactions },
  getAllTransactions,
}) => {
  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div className="container mt-4">
      <table class="table table-primary rounded">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pelanggan</th>
            <th scope="col">Barang</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allTransactions &&
            allTransactions.map((transaction, index) => (
              <TransactionItem
                key={transaction.id}
                index={index}
                transaction={transaction}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
});

export default connect(mapStateToProps, { getAllTransactions })(Transaction);
