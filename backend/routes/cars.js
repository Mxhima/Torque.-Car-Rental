const express = require('express');
const { getAllCars, addCar } = require('../controllers/carController');
const router = express.Router();
module.exports = router;

router.get('/all', getAllCars);
router.post('/add', addCar);



// cars.post('/add', async (req, res)=>{

//   try{
//     const carsData = new CARS({
//       carBrand: req.body.carBrand,
//       carModel: req.body.carModel,
//       carPrice: req.body.carPrice,
//       carImage: req.body.carImage,
//     })

//     const
//     res.status(200).json({});
//   }
// });
