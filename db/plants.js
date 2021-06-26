const {client}=require("./client")
async function createPlants({name,description,price,quantity,type}){
    try{
    const{rows:[plants],
    }=await client.query(
        `
    INSERT INTO plants(name,description,price,quantity,type)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
     `, [name,description,price,quantity,type]
     );

     
     return plants;
}

     catch(error){
console.log("Colud not create any plant")
throw error;
    }
};


async function getAllPlants(){

    try{
        const{rows}=await client.query(`
        SELECT * FROM plants;
        `);
        return rows;
}catch(error){
console.log("could not get all plants");
throw error;
    }
}


async function getPlantById(plant_id){
    try{
        const{
            rows:[plants],
        }=await client.query(`
        SELECT * 
        FROM plants
        WHERE id=${plant_id};
        `);
       return plants;

    }catch(error){
        console.log("could not get all plants");
        throw error;
    }

}
async function updatePlant(plant_id,fields={}){

    const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
    
    try{
        if (setString.length>0){
            await client.query(
               `
               UPDATE plants
                SET ${setString}
                WHERE id=${plant_id}
                RETURNING *;

                ` ,
                object.values(fields)
                );
        }

return await getPlantById(plant_id);

    }catch(error){}

throw error;

}
async function getPlantByName(name){
    try{
const{
    rows:[plant],}=await client.query(
        `
        SELECT * FROM plants 
        WHERE name =($1);
        `,[name]
    )
return plant;

    }
    catch(error){
throw error;
    }
}
async function getPlantByType(type){
try{
    const {rows}=await client.query(
        `
        SELECT * 
        FROM plants 
        WHERE type=$1;
        `,
        [type]
    );
    return rows;
}catch(error){
    throw error;
}

}

// async function destroyPlant(id){
//     try{

//         const plantId=getPlantById(id);
//         if (!plantId){
//             throw new error({message:"this plant doe not exist"})
        
//             const {rows:[plant]}=await client.query(`

//             DELETE FROM plants
//             WHERE id =$1
//             RETURNING *;
//          `,[id])
        
//         return plant
        
//         }
//     }catch (error){
//         throw error
//     }
// }


module.exports={
    client,
    createPlants,
    getPlantById,
    getAllPlants,
    updatePlant,
    getPlantByName,
    getPlantByType
};