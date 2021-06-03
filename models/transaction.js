const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TransactionSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    good: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    // Enable timestamps
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

// Enable soft delete
TransactionSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("transaction", TransactionSchema); // Export transaction model
