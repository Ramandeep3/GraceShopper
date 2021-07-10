const express = require("express");

const plantsRouter = express.Router();
const {
  createPlants,
  getPlantById,
  getAllPlants,
  updatePlant,
  getPlantByName,
  getPlantByType,
} = require("../db");

plantsRouter.get("/", async (req, res, next) => {
  try {
    const plants = await getAllPlants();
    res.send(plants);
  } catch (error) {
    next(error);
  }
});

plantsRouter.get("/:name", async (req, res, next) => {
  const name = req.params.name;
  try {
    const selectedPlant = await getPlantByName(name);
    res.send(selectedPlant);
  } catch (error) {
    throw error;
  }
});

plantsRouter.patch("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { name, description } = req.body;
  try {
    const newPlant = await updatePlant({ id, name, description });
    res.send(newPlant);
  } catch (error) {
    next(error);
  }
});

plantsRouter.post("/", async (req, res, next) => {
  const { name, description, price, imgURL, type } = req.body;
  // const newPlant = {};
  try {
    // (newPlant.name = name),
    //   (newPlant.description = description),
    //   (newPlant.imgURL = imgURL),
    //   (newPlant.price = price),
    //   (newPlant.type = type);

    const theNewPlant = await createPlants(req.body);
    console.log(req.body)
    console.log(newPlant)
    res.send(theNewPlant);
  } catch (error) {
    next(error);
  }
});

// plantsRouter.delete('/:id',async(req,res,next)=>{
//     const plantId=req.params.id
//     try{

// const deletePlant=await destr

//     }
// })
plantsRouter.get("/:type", async (req, res, next) => {
  const { type } = req.params;
  try {
    const plants = await getPlantByType(type);
    res.send(plants);
  } catch (error) {
    next(error);
  }
});
module.exports = plantsRouter;
