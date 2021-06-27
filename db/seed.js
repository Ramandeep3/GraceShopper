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

async function buildTables() {
  try {
    // drop tables in correct order
    console.log("Starting to drop tables...");
    client.query(`
      DROP TABLE IF EXISTS orders;
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
           stock_qty INTEGER DEFAULT 0,
           "imageURL" VARCHAR(255)
           

       );
       CREATE TABLE orders(
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES plants(id),
        count INTEGER NOT NULL, 
        "orderStatus" VARCHAR(255) NOT NULL,
        "orderCreated" DATE NOT NULL 
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
        id: 1,
        name: "roses",
        description: "roses symbolize gratitude, grace, admiration, and joy.",
        price: 5.99,
        quantity: 8,
        type: "flower",
        stock_qty: 50,
      },
      {
        id: 2,
        name: "oranges",
        description: "Orange, Citrus sinensis, is an evergreen tree",
        price: 10.99,
        quantity: 1,
        type: "fruit",
        stock_qty: 40,
      },
      {
        id: 3,
        name: "parlor palms",
        description: "Easy to grow",
        price: 15.99,
        quantity: 2,
        type: "indoor plant",
        stock_qty: 30,
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

async function rebuildDB() {
  try {
    client.connect();
    await buildTables();
    console.log("RDB Tables");
    await addInitialUsers();
    console.log("Int users added");
    await addInitialPlants();
    console.log("plants added");
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

async function testDB() {
  try {
    console.log("starting to build tables in rebuildDB");
    // await buildTables();
    console.log("finished build of tables in rebuildDB");
    console.log("starting to add initial users in rebuildDB");
    await addInitialUsers();
    console.log("finished adding initial users in rebuildDB");
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
    const updatedUserData = await updateUser(users[0].id, {
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
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
