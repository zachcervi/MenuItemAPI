import request from "supertest";
import app from "../../src/app";

describe("Menu Items Routes", () => {
  // Test to get all menu items
  test("Get all menu items", async () => {
    const res = await request(app).get("/api/menu/items");
    expect(res.statusCode).toBe(200);
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

  // Test to get a menu item by id
  test("Get Menu Item by Id", async () => {
    const res = await request(app).get("/api/menu/items/2");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      id: 2,
      name: "Pizza",
      price: 299,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    });
  });

  // Test to handle a menu item not found
  test("Get non-existing menu item returns 404", async () => {
    const res = await request(app).get("/api/menu/items/999");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
  });

  // Test to create a new menu item
  test("Create a new menu item", async () => {
    const newItem = {
      name: "Salad",
      price: 499,
      description: "Fresh",
      image: "https://cdn.auth0.com/blog/whatabyte/salad-sm.png",
    };
    const res = await request(app).post("/api/menu/items").send(newItem);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(newItem);
    expect(res.body).toHaveProperty("id");
  });

  // Test to update an existing menu item
  test("Update an existing menu item", async () => {
    const updatedItem = {
      name: "Updated Salad",
      price: 599,
      description: "Fresh and crispy",
      image: "https://cdn.auth0.com/blog/whatabyte/updated-salad-sm.png",
    };
    const res = await request(app).put("/api/menu/items/3").send(updatedItem);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({ id: 3, ...updatedItem });
  });

  // Test to handle updating a non-existing menu item
  test("Update a non-existing menu item returns 404", async () => {
    const updatedItem = {
      name: "Ghost Item",
      price: 1000,
      description: "Does not exist",
      image: "https://cdn.auth0.com/blog/whatabyte/ghost-item-sm.png",
    };
    const res = await request(app).put("/api/menu/items/999").send(updatedItem);
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
  });

  // Test to delete an existing menu item
  test("Delete an existing menu item", async () => {
    const res = await request(app).delete("/api/menu/items/2");
    expect(res.statusCode).toBe(204);
  });

  // Test to handle deleting a non-existing menu item
  test("Delete a non-existing menu item returns 404", async () => {
    const res = await request(app).delete("/api/menu/items/999");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ message: "Item not found" });
  });
});
