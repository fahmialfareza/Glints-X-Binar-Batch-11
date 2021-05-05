const request = require("supertest"); // Import supertest
const app = require("../index"); // Import app
const { transaksi, user } = require("../models"); // Import user and transaksi models
let token;

// Delete user before start
beforeAll(async () => {
  await user.destroy({ where: {}, force: true });
});

// Test User
describe("Auth Test", () => {
  describe("/signup POST", () => {
    it("It should get a token from sign up user", async () => {
      const res = await request(app).post("/auth/signup").send({
        name: "Fahmi Alfareza",
        email: "fahmialfareza97@gmail.com",
        password: "Aneh123!!",
        confirmPassword: "Aneh123!!",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Success");
      expect(res.body).toHaveProperty("token");
    });

    it("It should get an error", async () => {
      const res = await request(app).post("/auth/signup").send({
        name: "Fahmi Alfareza",
        email: "fahmialfareza97@gmail.com",
        password: "Aneh123!!",
        confirmPassword: "Aneh123!!",
      });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("User can't be created");
    });
  });

  describe("/signin POST", () => {
    it("It should get a token", async () => {
      const res = await request(app).post("/auth/signin").send({
        email: "fahmialfareza97@gmail.com",
        password: "Aneh123!!",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Success");
      expect(res.body).toHaveProperty("token");

      token = res.body.token;
    });

    it("It should get an email error", async () => {
      const res = await request(app).post("/auth/signin").send({
        email: "fahmialfareza@gmail.com",
        password: "Aneh1234!!",
      });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Email not found");
    });

    it("It should get an password error", async () => {
      const res = await request(app).post("/auth/signin").send({
        email: "fahmialfareza97@gmail.com",
        password: "Aneh1234!",
      });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Wrong password");
    });
  });
});

// Test transaksi
describe("Transaksi Test", () => {
  describe("/transaksi GET ALL", () => {
    it("It should get all transaksi data", async () => {
      const res = await request(app)
        .get("/transaksi")
        .set({
          Authorization: `Bearer ${token}`,
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toEqual("Success");
      expect(res.body.data).toBeInstanceOf(Array);
    });

    it("It should get unauthorized", async () => {
      const res = await request(app).get("/transaksi");

      expect(res.statusCode).toEqual(403);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("No auth token");
    });
  });

  describe("/transaksi POST", () => {
    it("It should create a transaksi", async () => {
      const res = await request(app)
        .post("/transaksi")
        .set({ Authorization: `Bearer ${token}` })
        .send({
          id_barang: 1,
          id_pelanggan: 1,
          jumlah: "3",
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toEqual("Success");
      expect(res.body.data).toBeInstanceOf(Object);
    });
  });
});
