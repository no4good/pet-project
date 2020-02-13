require("dotenv").config();
const PORT = process.env.APP_PORT;
const supertest = require("supertest");
const { expect } = require("chai");
const URL = `http://127.0.0.1:${PORT}/api`;

describe("CREATE user", () => {
  it("CREATE a user", async () => {
    let { body } = await supertest(URL)
      .post(`/auth/register`)
      .send({
        email: `rokdest2@gmail.com`,
        username: "rokdest2",
        password: "1111"
      })
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(body).to.be.an("object").and.not.empty;
  });
});
