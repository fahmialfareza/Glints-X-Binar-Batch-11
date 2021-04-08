import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAllTransactions,
  createTransaction,
  updateTransaction,
} from "../../actions/transactionActions";
import { getAllCustomers } from "../../actions/customerActions";
import { getAllGoods } from "../../actions/goodActions";
import TransactionItem from "./TransactionItem";
import { setAlert } from "../../actions/alertActions";
import Alert from "../layouts/Alert";

const Transaction = ({
  transaction: { allTransactions, error: transactionError },
  customer: { allCustomers, error: customerError },
  good: { allGoods, error: goodError },
  getAllTransactions,
  createTransaction,
  updateTransaction,
  getAllCustomers,
  getAllGoods,
  setAlert,
}) => {
  const [id_barang, setIdBarang] = useState();
  const [id_pelanggan, setIdPelanggan] = useState();
  const [jumlah, setJumlah] = useState("1");

  useEffect(() => {
    getAllTransactions();
    getAllCustomers();
    getAllGoods();
  }, []);

  useEffect(() => {
    if (transactionError) {
      setAlert(transactionError.data.message, "danger");
    }
  }, [transactionError]);

  useEffect(() => {
    if (customerError) {
      setAlert(customerError.data.message, "danger");
    }
  }, [customerError]);

  useEffect(() => {
    if (goodError) {
      setAlert(goodError.data.message, "danger");
    }
  }, [goodError]);

  const hideTransactionModal = () => {
    window.$("#addTransactionModal").modal("toggle");
  };

  const onCreateTransaction = async (event) => {
    event.preventDefault();

    await createTransaction({
      id_barang,
      id_pelanggan,
      jumlah,
    });

    if (!transactionError) {
      hideTransactionModal();
    }
  };

  return (
    <>
      <section id="actions" class="py-4 mb-4">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <a
                href="#"
                class="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addTransactionModal"
              >
                <i class="fas fa-plus"></i> Tambah Transaksi
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="posts">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h4>Transaksi</h4>
                </div>
                <Alert />
                <table class="table table-striped">
                  <thead class="thead-dark">
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
                          key={transaction._id}
                          index={index}
                          transaction={transaction}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-center bg-primary text-white mb-3">
                <div class="card-body">
                  <h3>Transaksi</h3>
                  <h4 class="display-4">
                    <i class="fa fa-exchange"></i>{" "}
                    {allTransactions && allTransactions.length}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="modal fade" id="addTransactionModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white">
              <h5 class="modal-title">Tambah Transaksi</h5>
              <button class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Alert />
              <form id="add-transaction" onSubmit={onCreateTransaction}>
                <div class="form-group">
                  <label htmlFor="barang">Barang</label>
                  <select
                    class="form-control"
                    onChange={(event) => setIdBarang(event.target.value)}
                    value={id_barang}
                    required
                  >
                    <option value="default" disabled>
                      Pilih Barang
                    </option>
                    {allGoods &&
                      allGoods.map((good) => (
                        <option key={good._id} value={good._id}>
                          {good.nama} [
                          {good.harga.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                          ]
                        </option>
                      ))}
                  </select>
                </div>
                <div class="form-group">
                  <label htmlFor="pelanggan">Pelanggan</label>
                  <select
                    class="form-control"
                    onChange={(event) => setIdPelanggan(event.target.value)}
                    value={id_pelanggan}
                    required
                  >
                    <option value="default" disabled>
                      Pilih Pelanggan
                    </option>
                    {allCustomers &&
                      allCustomers.map((customer) => (
                        <option key={customer._id} value={customer._id}>
                          {customer.nama}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="jumlah">Jumlah</label>
                  <input
                    type="number"
                    placeholder="jumlah"
                    className="form-control"
                    min="1"
                    value={jumlah}
                    onChange={(event) => setJumlah(event.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                type="submit"
                form="add-transaction"
                value="Submit"
              >
                Tambah Transaksi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
  good: state.good,
  customer: state.customer,
});

export default connect(mapStateToProps, {
  getAllTransactions,
  createTransaction,
  updateTransaction,
  getAllCustomers,
  getAllGoods,
  setAlert,
})(Transaction);
