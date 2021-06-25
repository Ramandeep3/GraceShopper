const { client } = require("./client");
async function createTables() {
    try {
        await client.query(`
     CREATE TABLE users(
         id SERIAL PRIMARY KEY,
         email VARCHAR(255 UNIQUE NOT NULL,
         username VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL,
         "isAdmin" BOOLEAN DEFAULT FALSE
         );
     CREATE TABLE plants(
             id SERIAL PRIMARY KEY,
             category VARCHAR(255) NOT NULL,
             title VARCHAR(255) NOT NULL,
             description TEXT NOT NULL,
             price FLOAT NOT NULL,
             "imageURL" VARCHAR(255)
         );
         CREATE TABLE orders(
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            "productId" INTEGER REFERENCES products(id),
            count INTEGER NOT NULL, 
            "orderStatus" VARCHAR(255) NOT NULL,
            "orderCreated" DATE NOT NULL 
         );
         CREATE TABLE reviews (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            "productId" INTEGER REFERENCES products(id),
            review TEXT NOT NULL
        );

       `);

    } catch (error) {
        console.log("error building tables"); 
        throw error;
    }
}

// SEED DATA
async function createInitialUsers() {
    console.log("Starting to create users...");
    try {
        const usersToCreate=[{
            name:"Ryan",
            email:"sneakerhead123@gmail.com",
            password:"joe123",
            admin:false
        },
    {
        name: "Michelle",
        email: "michelle@admin.com",
        password: "admin123",
        admin: true

    },
{
    name: "Rashon",
    email: "rashon@admin.com",
    password: "admin456",
    admin: true
},
{
    name: "Nick",
    email: "nick@admin.com",
    password: "admin789",
    admin: true

}]
const users=await Promise.all(usersToCreate.map(createuser));
console.log("users created:");
console.log(users);
console.log('Finshed creating users!')
    }catch(error){
        console.error("Error creating users!");
        throw error;  

    }

async function rebuildDB() {

}
async function testDB() {

}
rebuildDB()
    .then(testDB)
    .catch(console.error)
    .finally(() => client.end());
