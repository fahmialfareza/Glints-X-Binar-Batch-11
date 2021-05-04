const request = require("supertest"); // Import supertest
const app = require("../index"); // Import app
const { transaksi } = require("../models"); // Import user and transaksi models

// Delete all data transaksi
// beforeAll(async () => {
//   await transaksi.destroy({
//     where: {},
//     force: true,
//   });
// });

// Test transaksi
describe("Transaksi Test", () => {
  describe("/transaksi GET ALL", () => {
    it("It should get all transaksi data", async () => {
      const res = await request(app).get("/transaksi");

      expect(res.statusCode).toEqual(403);
    });
  });
});
