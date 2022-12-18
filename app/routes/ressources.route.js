module.exports = app => {
    const ressource = require("../controllers/ressources.controller");
  
    var router = require("express").Router();
  
    router.get("/restaurant", ressource.findAllRestaurantNames);
    router.get("/restaurant/:name", ressource.findRestaurantByName);
    router.put("/restaurant/:name", ressource.updateRestaurantByName);
    router.post("/restaurant", ressource.addRestaurant);
    router.delete("/restaurant/:name", ressource.deleteRestaurant);
    
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
  