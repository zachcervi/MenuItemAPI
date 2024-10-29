import request from "supertest";
import app from "../../src/app";

describe("Menu Items Routes", () => {
  test("Get all menu items", async () => {
    const res = await request(app).get("/api/menu/items");
    expect(res.body).toEqual([
      {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
      },
      {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
      },
      {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
      },
    ]);
  });
});
