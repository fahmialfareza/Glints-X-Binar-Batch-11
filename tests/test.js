const request = require("supertest"); // Import supertest
const app = require("../index"); // Import app
const { user, transaksi } = require("../models"); // Import user and transaksi models

// Delete all data in user and transaksi
beforeAll(async () => {
  await Promise.all([user.deleteMany(), transaksi.deleteMany()]);
});

// Test the auth
describe("Auth Test", () => {
  describe("/auth/signup POST", () => {
    it("It should create a user and return the token", async () => {
      const res = await request(app).post("/auth/signup").send({
        email: "fahmialfareza97@gmail.com",
        password: "Aneh1234!!",
        confirmPassword: "Aneh1234!!",
        name: "Fahmi Alfareza",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Success");
      expect(res.body).toHaveProperty("token");
    });

    it("It should error when create a user", async () => {
      const res = await request(app).post("/auth/signup").send({
        email: "fahmialfareza97@gmail.com",
        password: "Aneh1234!!",
        confirmPassword: "Aneh1234!!",
        name: "Fahmi Alfareza",
      });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("User can't be created");
    });
  });

  describe("/auth/signin POST", () => {
    it("It should return the token", async () => {
      const res = await request(app).post("/auth/signin").send({
        email: "fahmialfareza97@gmail.com",
        password: "Aneh1234!!",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Success");
      expect(res.body).toHaveProperty("token");
    });
  });
});
