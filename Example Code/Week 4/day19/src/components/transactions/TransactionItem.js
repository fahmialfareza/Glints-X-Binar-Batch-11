import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTransaction } from "../../actions/transactionActions";

const TransactionItem = ({ transaction, index, deleteTransaction }) => {
  const onDelete = (event) => {
    event.preventDefault();

    deleteTransaction(transaction.id);
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{transaction.nama_pelanggan}</td>
      <td>{transaction.nama_barang}</td>
      <td>
        <Link to={`/${transaction.id}`} className="btn btn-primary btn-block">
          Detail
        </Link>
        <button className="btn btn-danger btn-block" onClick={onDelete}>
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default connect(null, { deleteTransaction })(TransactionItem);
