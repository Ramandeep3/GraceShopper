 const { Module } = require("module");
const { client } = require("./client");


 async function createOrder({date_ordered,price,status}) {
    
     try {
         
    const{
         rows:[order],
     } =
     await client.query(
        `       
        INSERT INTO orders(date_ordered,price,status)
       VALUES($1, $2,$3)
         RETURNING *;
       `,
       [date_ordered,price,status]
     );
     return order;
     } catch (error) {
         console.error("could not create user order");
       throw error;
     }
   }
   async function getAllOrders() {
     try {
       const { rows: orderId } = await client.query(`
           SELECT *
           FROM orders;
         `);
       const orders = await Promise.all(
         orderId.map((order) => getOrderById(order.id))
       );
       console.log(orders, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
       return orders;
     } catch (error) {
       throw error;
     }
   }

  async function getOrderById(id) {
    try {
      const {
        rows: order } = await client.query(
        `
        SELECT * FROM cart
        JOIN orders
    ON cart."orderID"=orders.id         `,
        [id]
      );
const orders = await Promise.all(
    orderId.map((order) => getOrderById(order.id))
  );
      return orders;
    } catch (error) {
      throw error;
    }
  }

  async function addCartToUserOrders(userId, plant_id) {
    try {
      const { rows: plant } = await client.query(
        `
         SELECT *
         FROM plants
         WHERE id=$1;
         `,
        [plant_id]
      );
      
      await createUserOrder(userId, product_id);
      return await getOrderById(userId);
    } catch (error) {
      console.error("could not add cart item to order");
      throw error;
    }
  }
  const updateStatusOfOrder = async (orderId, status) => {
    try {
      const {
        rows: [orders],
      } = await client.query(
        `
        UPDATE orders
        SET status=$2
        WHERE id=$1
        RETURNING *;
        `,
        [orderId, status]
      );
  
      return orders;
    } catch (error) {
      throw error;
    }
  };

  const destroyOrder = async (id) => {
    try {
      const {
        rows: [order],
      } = await client.query(
        `
        DELETE FROM orders
        WHERE id = $1
        RETURNING *;
        `,
        [id]
      );
      await client.query(
        `
        DELETE FROM orders
        WHERE "orderId" = $1
        `,
        [id]
      );
      return order;
    } catch (error) {
      throw error;
    }
  };
  module.exports={
client,
createOrder,
getAllOrders,
getOrderById,
addCartToUserOrders,
updateStatusOfOrder,
destroyOrder
}