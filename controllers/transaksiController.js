const midtransClient = require("midtrans-client");
const moment = require("moment-timezone");
const { transaksi, barang, pelanggan, pemasok, user } = require("../models"); // Import all models

class TransaksiController {
  // Get all transaksi data
  async getAll(req, res) {
    try {
      let data = await transaksi.findAll({
        // find all data of Transaksi table
        attributes: [
          "id",
          "jumlah",
          "total",
          ["createdAt", "waktu"],
          "status",
          "expiredPayment",
          "token",
          "redirect_url",
        ], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
            include: [
              // Include is join
              { model: pemasok, attributes: ["nama"] },
            ],
          },
          {
            model: pelanggan,
            attributes: ["nama"], // just this attrubute from Pelanggan that showed
          },
        ],
      });

      // If data is nothing
      if (data.length === 0) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Get One transaksi
  getOne(req, res) {
    // Promise
    // FindOne transaksi
    transaksi
      .findOne({
        where: { id: req.params.id },
        attributes: [
          "id",
          "jumlah",
          "total",
          ["createdAt", "waktu"],
          "status",
          "expiredPayment",
          "token",
          "redirect_url",
        ], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
            include: [
              // Include is join
              { model: pemasok, attributes: ["nama"] },
            ],
          },
          {
            model: pelanggan,
            attributes: ["nama"], // just this attrubute from Pelanggan that showed
          },
        ],
      })
      .then((data) => {
        // If transaksi not found
        if (!data) {
          return res.status(404).json({
            message: "Transaksi Not Found",
          });
        }

        // If success
        return res.status(200).json({
          message: "Success",
          data: data,
        });
      })
      .catch((e) => {
        // If error
        return res.status(500).json({
          message: "Internal Server Error",
          error: e.message,
        });
      });
  }

  // Create Data
  async create(req, res) {
    try {
      // Will create data
      let createdData = await transaksi.create(req.body);

      // Create Snap API instance
      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
      });

      let userMakeTransaction = await user.findOne({
        where: { id: req.user.id },
      });

      // To define start time
      let now = moment().tz("Asia/Jakarta");
      now = now.format().replace("T", " ").replace("+07", " +07");

      let parameter = {
        transaction_details: {
          order_id: createdData.id,
          gross_amount: req.body.total,
        },
        customer_details: {
          email: userMakeTransaction.email,
          phone: "+621234567890",
        },
        credit_card: {
          secure: true,
        },
        callbacks: {
          finish: "https://sequelize.gabatch11.my.id",
        },
        expiry: {
          start_time: now,
          unit: "minutes",
          duration: 2,
        },
      };

      let midtransResponse = await snap.createTransaction(parameter);

      // Update transaksi to create midtrans token and redirect url
      await transaksi.update(
        {
          token: midtransResponse.token,
          redirect_url: midtransResponse.redirect_url,
        },
        { where: { id: createdData.id } }
      );

      // Find the new transaksi
      let data = await transaksi.findOne({
        where: { id: createdData.id },
        attributes: [
          "id",
          "jumlah",
          "total",
          ["createdAt", "waktu"],
          "status",
          "expiredPayment",
          "token",
          "redirect_url",
        ], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
            include: [
              // Include is join
              { model: pemasok, attributes: ["nama"] },
            ],
          },
          {
            model: pelanggan,
            attributes: ["nama"], // just this attrubute from Pelanggan that showed
          },
        ],
      });

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Update data
  async update(req, res) {
    let update = {
      id_barang: req.body.id_barang,
      id_pelanggan: req.body.id_pelanggan,
      jumlah: req.body.jumlah,
      total: req.body.total,
    };

    try {
      // Transaksi table update data
      let updatedData = await transaksi.update(update, {
        where: {
          id: req.params.id,
        },
      });

      // Find the updated transaksi
      let data = await transaksi.findOne({
        where: { id: req.params.id },
        attributes: [
          "id",
          "jumlah",
          "total",
          ["createdAt", "waktu"],
          "status",
          "expiredPayment",
          "token",
          "redirect_url",
        ], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
            include: [
              // Include is join
              { model: pemasok, attributes: ["nama"] },
            ],
          },
          {
            model: pelanggan,
            attributes: ["nama"], // just this attrubute from Pelanggan that showed
          },
        ],
      });

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Delete Data
  async delete(req, res) {
    try {
      // Delete data
      let data = await transaksi.destroy({ where: { id: req.params.id } });

      // If data deleted is null
      if (!data) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success delete transaksi",
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Handle payment gateway
  async handlePayment(req, res) {
    try {
      let orderId = req.body.order_id;
      let transactionStatus = req.body.transaction_status;
      let fraudStatus = req.body.fraud_status;
      let data;

      console.log(
        `Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`
      );

      // Sample transactionStatus handling logic

      if (transactionStatus == "capture") {
        if (fraudStatus == "challenge") {
          // TODO set transaction status on your database to 'challenge'
          // and response with 200 OK
          data = await transaksi.update(
            {
              status: "success",
              expiredPayment: null,
            },
            {
              where: {
                id: orderId,
              },
            }
          );
        } else if (fraudStatus == "accept") {
          // TODO set transaction status on your database to 'success'
          // and response with 200 OK
          data = await transaksi.update(
            {
              status: "success",
              expiredPayment: null,
            },
            {
              where: {
                id: orderId,
              },
            }
          );
        }
      } else if (transactionStatus == "settlement") {
        // TODO set transaction status on your database to 'success'
        // and response with 200 OK
        data = await transaksi.update(
          {
            status: "success",
            expiredPayment: null,
          },
          {
            where: {
              id: orderId,
            },
          }
        );
      } else if (
        transactionStatus == "cancel" ||
        transactionStatus == "deny" ||
        transactionStatus == "expire"
      ) {
        // TODO set transaction status on your database to 'failure'
        // and response with 200 OK
        data = await transaksi.update(
          {
            status: "failed",
          },
          {
            where: {
              id: orderId,
            },
          }
        );
      } else if (transactionStatus == "pending") {
        // TODO set transaction status on your database to 'pending' / waiting payment
        // and response with 200 OK
        data = await transaksi.update(
          {
            status: "pending",
          },
          {
            where: {
              id: orderId,
            },
          }
        );
      }

      // Find the updated transaksi
      data = await transaksi.findOne({
        where: { id: orderId },
        attributes: [
          "id",
          "jumlah",
          "total",
          ["createdAt", "waktu"],
          "status",
          "expiredPayment",
          "token",
          "redirect_url",
        ], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
            include: [
              // Include is join
              { model: pemasok, attributes: ["nama"] },
            ],
          },
          {
            model: pelanggan,
            attributes: ["nama"], // just this attrubute from Pelanggan that showed
          },
        ],
      });

      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }
}

module.exports = new TransaksiController();
