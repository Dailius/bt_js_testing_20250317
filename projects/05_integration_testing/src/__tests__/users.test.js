const app = require("../app");
const request = require("supertest");

describe("User API", function () {
  test("GET /api/users/ return code 200 and not empty list of users", async function () {
    const res = await request(app).get("/api/users/");

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("GET /api/users/1 return code 200 and body user details", async function () {
    const expectedUserName = "Alice";

    const res = await request(app).get("/api/users/1");

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(expectedUserName);
  });

  test("Negative GET /api/users/333 return code 404 and body error message", async () => {
    const expectedResponseCode = 404;
    const expectedErrorMessage = "User not found";

    const res = await request(app).get("/api/users/333");

    expect(res.statusCode).toEqual(expectedResponseCode);
    expect(res.body.message).toEqual(expectedErrorMessage);
  });

  test("POST /api/users/ return code 201 and body user details", async () => {
    const userName = "Bonifacijus";
    const expectedResponseCode = 201;
    const expectedUserName = "Bonifacijus";

    const user = { name: userName };
    const res = await request(app).post("/api/users/").send(user);

    expect(res.statusCode).toEqual(expectedResponseCode);
    expect(res.body.id).toBeGreaterThan(0);
    expect(res.body.name).toEqual(expectedUserName);
  });
});
