const { pemasok, pelanggan, barang, transaksi } = require("../models"); // Import all models

// pemasok and barang relationship
pemasok.hasMany(barang, { foreignKey: "id_pemasok" });
barang.belongsTo(pemasok, { foreignKey: "id_pemasok" });

// barang and transaksi relationship
barang.hasMany(transaksi, { foreignKey: "id_barang" });
transaksi.belongsTo(barang, { foreignKey: "id_barang" });

// pelanggan and transaksi relationship
pelanggan.hasMany(transaksi, { foreignKey: "id_pelanggan" });
transaksi.belongsTo(pelanggan, { foreignKey: "id_pelanggan" });
