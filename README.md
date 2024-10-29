# Menu Items API

This API is built with Node.js, Express, and TypeScript, providing endpoints to manage a menu of items. It includes CRUD operations to create, read, update, and delete menu items.

## Table of Contents

- [Setup](#setup)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Example Requests and Responses](#example-requests-and-responses)

---

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/zachcervi/MenuItemAPI.git
   cd MenuItemAPI
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**

   Create a `.env` file in the root directory of the project, and define the required environment variables. Here’s an example:

   ```env
   PORT=5050
   AUTH0_AUDIENCE=<your auth0 audience>
   AUTH0_DOMAIN=<your auth0 domain>
   AUTH0_CLIENT_ID=<your auth0 client id>
   AUTH0_CLIENT_SECRET=<your auth0 client secret>
   ```

4. **Build the Project:**

   Compile the TypeScript files into JavaScript using the following command:

   ```bash
   npm run build
   ```

---

## Running the API

5. **Run the Server in Development Mode:**

   To start the server in development mode with automatic reloading on code changes, use the following command:

   ```bash
   npm run dev
   ```

6. **Run the Server in Production Mode:**

   To start the server in production mode, use the following command:

   ```bash
   npm start
   ```

7. **Run Unit Tests:**
   ```bash
   npm run test
   ```

---

## API Endpoints

### Get All Menu Items

- **URL**: `/api/menu/items`
- **Method**: `GET`
- **Description**: Retrieve all menu items.

### Get Menu Item by ID

- **URL**: `/api/menu/items/:id`
- **Method**: `GET`
- **Description**: Retrieve a menu item by its ID.

### Create New Menu Item

- **URL**: `/api/menu/items`
- **Method**: `POST`
- **Description**: Create a new menu item.
- **Body**: JSON object with `name`, `price`, `description`, and `image` fields.

```json
{
  "name": "Salad",
  "price": 499,
  "description": "Fresh and healthy",
  "image": "https://example.com/salad.png"
}
```

### Update Menu Item by ID

- **URL**: `/api/menu/items/:id`
- **Method**: `PUT`
- **Description**: Update an existing menu item.
- **Body**: JSON object with updated `name`, `price`, `description`, and `image` fields.

```json
{
  "name": "Updated Salad",
  "price": 550,
  "description": "Now with added crunch",
  "image": "https://example.com/updated-salad.png"
}
```

### Delete Menu Item by ID

- **URL**: `/api/menu/items/:id`
- **Method**: `DELETE`
- **Description**: Delete a menu item by its ID.

## Example Requests and Responses

### Get Menu All Items

- **Request**:
  ```http
  GET /api/menu/items
  ```
- **Response**:

  ```json
  [
    {
      "id": 1,
      "name": "Burger",
      "price": 599,
      "description": "Tasty",
      "image": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 299,
      "description": "Cheesy",
      "image": "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    }
  ]
  ```

  ### Get Menu Item by Id

- **Request**:
  ```http
  GET /api/menu/items/1
  ```
- **Response**:

  ```json
  {
    "id": 1,
    "name": "Burger",
    "price": 599,
    "description": "Tasty",
    "image": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
  }
  ```

### Create Menu Item

- **Request**:

  ```http
  POST /api/menu/items
  Content-Type: application/json

  {
    "name": "Salad",
    "price": 499,
    "description": "Fresh",
    "image": "https://cdn.auth0.com/blog/whatabyte/salad-sm.png"
  }

  ```

- **Response**:

  ```json
  {
    "id": 4,
    "name": "Salad",
    "price": 499,
    "description": "Fresh",
    "image": "https://cdn.auth0.com/blog/whatabyte/salad-sm.png"
  }
  ```

### Update Menu Item

- **Request**:

  ```http
  PUT /api/menu/items/2
  Content-Type: application/json

  {
    "name": "Updated Pizza",
    "price": 399,
    "description": "Extra cheesy",
    "image": "https://cdn.auth0.com/blog/whatabyte/pizza-updated-sm.png"
  }
  ```

- **Response**:

  ```json
  {
    "id": 2,
    "name": "Updated Pizza",
    "price": 399,
    "description": "Extra cheesy",
    "image": "https://cdn.auth0.com/blog/whatabyte/pizza-updated-sm.png"
  }
  ```

### Delete Menu Item

- **Request**:
  ```http
  DELETE /api/menu/items/2
  ```
- **Response**:
  ```http
  Status: 204 No Content
  ```
