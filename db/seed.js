const { client } = require("./client");
const {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  getUserByUsername,
} = require("./users");

const {
  createPlants,
  getPlantById,
  getAllPlants,
  getPlantByName,
  getPlantByType,
  updatePlant,
} = require("./plants");

const {
  addToCart,
  getCartByUserId,
  deleteFromCart,
  updateItemQuantity,
} = require("./cart");

// const {createOrder,getAllOrders,
//   getOrderById,
//   addCartToUserOrders}=require("./orders")

async function buildTables() {
  try {
    // drop tables in correct order
    console.log("Starting to drop tables...");
    client.query(`
    
    
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS cart;
      DROP TABLE IF EXISTS plants;
      DROP TABLE IF EXISTS users;
    `);
    console.log("Finished dropping tables!");

    // build tables in correct order
    console.log("Starting to build tables...");

    await client.query(`
  
      CREATE TABLE users(
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE,
          username VARCHAR(255) UNIQUE,
          password VARCHAR(255),
          address VARCHAR(255) NOT NULL,
          city VARCHAR(255) NOT NULL,
          state VARCHAR(255) NOT NULL,
          zip VARCHAR(255) NOT NULL,
          "isAdmin" BOOLEAN DEFAULT false,
          "isUser" BOOLEAN DEFAULT false
       );

       CREATE TABLE plants(
           id SERIAL PRIMARY KEY,
           name VARCHAR(30) UNIQUE,
           description VARCHAR(255),
           price MONEY,
           quantity INTEGER,
           type VARCHAR(255) NOT NULL,
           stock_qty INTEGER DEFAULT 1,
           "imageURL" VARCHAR(255) UNIQUE
       );
       
       CREATE TABLE orders(
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES plants(id),
        quantity INTEGER NOT NULL, 
        price MONEY,
        "orderStatus" VARCHAR(255) NOT NULL,
        "orderCreated" DATE NOT NULL 
       );
       CREATE TABLE cart(
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES plants(id),
        price MONEY,
        quantity INTEGER,
        "plantUrl" VARCHAR(255) REFERENCES plants("imageURL")
        );
    `);
    console.log("Finished building tables!");
  } catch (error) {
    throw error;
  }
}

async function addInitialUsers() {
  try {
    console.log("starting to create users...");
    const usersToCreate = [
      {
        email: "jeffereyfitzpatrick@gmail.com",
        name: "Jefferey Fitzpatrick",
        password: "Testing1LastTime",
        username: "JFitz447",
        address: "600 JK court",
        city: "SomeCity",
        state: "NC",
        zip: "04576",
        isAdmin: true,
      },
      {
        email: "johnDope@gmail.com",
        name: "John Dope",
        password: "NotThatDopey",
        username: "dopeyThe7th",
        address: "4321 Dopeback rd",
        city: "Noplace",
        state: "SC",
        zip: "54321",
        isAdmin: true,
      },
      {
        email: "john.doe@gmail.com",
        name: "John Doe",
        password: "JDoe4Life",
        username: "BigBadDoe",
        address: "1234 Back Woods ln",
        city: "Somewhere",
        state: "TN",
        zip: "12345",
        isAdmin: false,
      },
      {
        email: "The.MF.Greatest@gmail.com",
        name: "The Greatest",
        password: "elGreat",
        username: "TheGreatestMF",
        address: "9999 Throne Room",
        city: "Atlantis",
        state: "Earth",
        zip: "98765",
      },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));
    console.log("User Created: ", users);
    console.log("Finished creating users.");
  } catch (error) {
    throw error;
  }
}

async function addInitialPlants() {
  try {
    console.log("Starting to create plants...");
    const plantsToCreate = [
      {
        name: "Red Rose Plant",
        description: "roses symbolize gratitude, grace, admiration, and joy.",
        price: 25.99,
        quantity: 1,
        type: "flower",
        stock_qty: 50,
        imageURL:
          "https://thumbs.dreamstime.com/b/rose-plant-miniature-red-flowers-red-plastic-pot-isolated-against-white-61525704.jpg",
      },
      {
        name: "Oranges",
        description: "Orange, Citrus sinensis, is an evergreen tree",
        price: 35.99,
        quantity: 1,
        type: "fruit",
        stock_qty: 40,
        imageURL:
          "https://thumbs.dreamstime.com/b/orange-tree-against-white-background-14184672.jpg",
      },
      {
        name: "Parlor Palms",
        description: "Easy to grow",
        price: 19.99,
        quantity: 1,
        type: "indoor plant",
        stock_qty: 30,
        imageURL:
          "https://thumbs.dreamstime.com/b/beautiful-parlor-palm-white-ceramic-pot-beautiful-parlor-palm-white-ceramic-pot-reflection-white-background-119532631.jpg",
      },
      {
        name: "Succulents",
        description:
          "All cactus are succulents but not all succulents are cactus. To keep it simple, perhaps the best way to think of succulents is to think of them as plants that store water in their tissues.",
        price: 42.99,
        quantity: 1,
        type: "indoor plant",
        stock_qty: 30,
        imageURL:
          "https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      },
      {
        name: "Fern",
        description:
          "Ferns are plants that do not have flowers. Some look like tiny bunches of grapes, some look like a little brown purse, and others like a dome.",
        price: 19.99,
        quantity: 1,
        type: "non-flowering plant",
        stock_qty: 30,
        imageURL:
          "https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
      {
        name: "Japanese Maple",
        description:
          "Japanese maple plant can be grown as a small single-stemmed tree or large multiple stemmed shrub.",
        price: 19.99,
        quantity: 1,
        type: "tree",
        stock_qty: 30,
        imageURL:
          "https://images.pexels.com/photos/5745828/pexels-photo-5745828.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
      {
        name: "Caladium",
        description:
          "This plant’s arrowhead-shaped leaves are readily found in shades of red, pink, and white.",
        price: 12.99,
        quantity: 1,
        type: "outdoor plant",
        stock_qty: 50,
        imageURL:
          "https://images.pexels.com/photos/1403404/pexels-photo-1403404.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
    ];
    const plants = await Promise.all(plantsToCreate.map(createPlants));
    console.log("Plants Created:");
    console.log(plants);
    console.log("Finished creating plants!");
  } catch (error) {
    throw error;
  }
}
// async function createInitialOrders(){

//   try{
//     console.log("starting to create orders....")
//     const ordersToCreate=[
//       {
//         date_ordered: "06/01/2021",
//         price: 25.99

//       },
//       {
//         date_ordered: "07/01/2021",
//         price: 35.99
//       },
//       {
//         date_ordered: "07/02/2021",
//         price: 19.99

//       }
//       ,{
//         date_ordered: "06/28/2021",
//         price: 42.99

//       }
//     ];
//     const theOrders = await Promise.all(
//       ordersToCreate.map((order) => createOrder(order))
//     );

//     console.log("orders Created: ", theOrders);
//     console.log("Finished creating links.");
//   }catch{}
// }

async function rebuildDB() {
  try {
    client.connect();
    await buildTables();
    console.log("RDB Tables");
    await addInitialUsers();
    console.log("Int users added");
    await addInitialPlants();
    console.log("plants added");

    // await createInitialCarts();
    // console.log("cart is created")

    //     await createInitialOrders();
    //     console.log("orders created")
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

async function testDB() {
  try {
    console.log("calling getAllUsers");
    const users = await getAllUsers();
    console.log("get All users Result:", users);
    console.log("Calling getUserByEmail with [1]");
    const singleEmail = await getUserByEmail(users[1].email);
    console.log("Results for user by email:", singleEmail);
    console.log("Calling getUserById with [1]");
    const singleUser = await getUserById(1);
    console.log("Result for user by id:", singleUser);
    console.log("Calling update user");
    const updatedUserData = await updateUser(users[1].id, {
      username: "Jfitz447",
    });
    console.log("Results for updatedUserData:", updatedUserData);
    console.log("Calling getUserByUsername with 1");
    const username = await getUserByUsername(users[1].username);
    console.log("Results for getUserByUsername:", username);

    console.log("Starting to test plants...");
    console.log("Calling get AllPlants");
    const plants = await getAllPlants();
    console.log("Result:", plants);

    console.log("Calling getProductByType");
    const plantByType = await getPlantByType("roses");
    console.log("Result:", plantByType);

    console.log("Calling updatePlant", plants[1].id);

    const updatePlant1 = await updatePlant(plants[1].id, {
      name: "New rose flower",
      description: "updated",
    });
    console.log("Result:", updatePlant1);

    console.log("Calling getPlantById with 1");
    const singlePlant = await getPlantById(1);
    console.log("Result:", singlePlant);

    console.log("Calling getUserByUsername with 3");
    const usernameGreatest = "TheGreatestMF";
    const userNameJeff = "JFitz447";
    const greatestUser = await getUserByUsername(usernameGreatest);
    const greatestId = greatestUser.id;

    console.log("Calling First addToCart");
    const userCartOne = await addToCart(
      usernameGreatest,
      plants[1].id,
      plants[1].price,
      3,
      plants[1].imageURL
    );
    console.log("Result of First Cart Test:", userCartOne);

    console.log("Calling Second addToCart");
    const userCartTwo = await addToCart(
      usernameGreatest,
      plants[2].id,
      plants[2].price,
      5,
      plants[2].imageURL
    );
    console.log("Result of Second Cart Test:", userCartTwo);
    console.log("Calling Second addToCart");
    const userCartThree = await addToCart(
      userNameJeff,
      plants[2].id,
      plants[2].price,
      5,
      plants[2].imageURL
    );
    console.log("Result of Second Cart Test:", userCartThree);

    const userCart = await getCartByUserId(greatestId);
    console.log("Result of User Initial Cart:", userCart);
    const plantOneId = plants[1].id;
    console.log("Plant One Id", plantOneId);
    await deleteFromCart(greatestId, plantOneId);
    const userCart2 = await getCartByUserId(greatestId);
    console.log("Result of Deleted Item 1 from Cart:", userCart2);
    const plantTwoId = plants[2].id;
    await updateItemQuantity(25, plantTwoId, greatestId);
    const userCart3 = await getCartByUserId(greatestId);
    console.log("Result of Updated Item from Cart:", userCart3);
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
