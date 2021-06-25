const { client } = require("index.js");

async function dropTables() {
  // drop tables in correct order
  try {
    console.log("Dropping All Tables...");
    await client.query(`
      DROP TABLE IF EXISTS link_tags;
      
     
      
  `);
    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error while dropping tables!");
    throw error;
  }
}
