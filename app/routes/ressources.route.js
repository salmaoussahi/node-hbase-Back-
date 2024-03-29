module.exports = app => {
    const ressource = require("../controllers/ressources.controller");
  
    var router = require("express").Router();
   
    router.get("/",ressource.findAllRessourcesNames);

    router.get("/Restaurant", ressource.findAllRestaurantNames);
    router.get("/Restaurant/:name", ressource.findRestaurantByName);
    router.put("/Restaurant/:name", ressource.updateRestaurantByName);
    router.post("/Restaurant", ressource.addRestaurant);
    router.delete("/Restaurant/:name", ressource.deleteRestaurant);
    
    router.get("/hotel", ressource.findAllHotelNames);
    router.get("/hotel/:name", ressource.findHotelByName);
    router.put("/hotel/:name", ressource.updateHotelByName);
    router.post("/hotel", ressource.addHotel);
    router.delete("/hotel/:name", ressource.deleteHotel);

    router.get("/transport", ressource.findAllTransportNames);
    router.get("/transport/:name", ressource.findTransportByName);
    router.put("/transport/:name", ressource.updateTransportByName);
    router.post("/transport", ressource.addTransport);
    router.delete("/transport/:name", ressource.deleteTransport);

    router.get("/visiteguidee", ressource.findAllVisiteguideeNames);
    router.get("/visiteguidee/:name", ressource.findVisiteguideeByName);
    router.put("/visiteguidee/:name", ressource.updateVisiteguideeByName);
    router.post("/visiteguidee", ressource.addVisiteguidee);
    router.delete("/visiteguidee/:name", ressource.deleteVisiteguidee);

    app.use('/api/ressource', router);
  };
  