const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should return 'Hello, World!' with status 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello, World!");
  });
});
