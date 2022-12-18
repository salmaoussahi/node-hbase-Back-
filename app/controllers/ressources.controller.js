const hbase = require('hbase')
client = hbase({ host: '127.0.0.1', port: 10005 })

//Ressources

exports.findAllRessourcesNames = (req, res) => {
  var ressources=[]
  client
    .table('Ressources')
    .schema(function(error, schema){
        schema.ColumnSchema.forEach(function(name){
            var name = name.name;
            ressources.push(name);
        })
        console.log("ressources")
        console.log(ressources)
        res.send(ressources)
      })
};

//Restaurant

exports.findAllRestaurantNames = (req, res) => {
  client
  .table('Ressources')
  .row('*')
  .get('Restaurant:name', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.findRestaurantByName = (req, res) => {
  name = req.params.name
  client
  .table('Ressources')
  .row(name)
  .get('Restaurant', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.updateRestaurantByName = (req, res) => {
  name = req.params.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien
  client
  .table('Ressources')
  .row(name)
  .put(
    ['Restaurant:name', 'Restaurant:image','Restaurant:description','Restaurant:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.addRestaurant = (req, res) => {
  name = req.body.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien

  client
  .table('Ressources')
  .row(name)
  .put(
    ['Restaurant:name', 'Restaurant:image','Restaurant:description','Restaurant:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.deleteRestaurant = (req, res) => {
  name = req.params.name

  client
  .table('Ressources')
  .row(name)
  .delete((error, success) => {
    res.send(success)
  })
};

//Hotel

exports.findAllHotelNames = (req, res) => {
  client
  .table('Ressources')
  .row('*')
  .get('Hotel:name', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.findHotelByName = (req, res) => {
  name = req.params.name
  client
  .table('Ressources')
  .row(name)
  .get('Hotel', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.updateHotelByName = (req, res) => {
  name = req.params.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien
  client
  .table('Ressources')
  .row(name)
  .put(
    ['Hotel:name', 'Hotel:image','Hotel:description','Hotel:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.addHotel = (req, res) => {
  name = req.body.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien

  client
  .table('Ressources')
  .row(name)
  .put(
    ['Hotel:name', 'Hotel:image','Hotel:description','Hotel:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.deleteHotel = (req, res) => {
  name = req.params.name

  client
  .table('Ressources')
  .row(name)
  .delete((error, success) => {
    res.send(success)
  })
};

//Visiteguidee

exports.findAllVisiteguideeNames = (req, res) => {
  client
  .table('Ressources')
  .row('*')
  .get('Visiteguidee:name', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.findVisiteguideeByName = (req, res) => {
  name = req.params.name
  client
  .table('Ressources')
  .row(name)
  .get('Visiteguidee', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.updateVisiteguideeByName = (req, res) => {
  name = req.params.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien
  client
  .table('Ressources')
  .row(name)
  .put(
    ['Visiteguidee:name', 'Visiteguidee:image','Visiteguidee:description','Visiteguidee:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.addVisiteguidee = (req, res) => {
  name = req.body.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien

  client
  .table('Ressources')
  .row(name)
  .put(
    ['Visiteguidee:name', 'Visiteguidee:image','Visiteguidee:description','Visiteguidee:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.deleteVisiteguidee = (req, res) => {
  name = req.params.name

  client
  .table('Ressources')
  .row(name)
  .delete((error, success) => {
    res.send(success)
  })
};

//Transport

exports.findAllTransportNames = (req, res) => {
  client
  .table('Ressources')
  .row('*')
  .get('Transport:name', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.findTransportByName = (req, res) => {
  name = req.params.name
  client
  .table('Ressources')
  .row(name)
  .get('Transport', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.updateTransportByName = (req, res) => {
  name = req.params.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien
  client
  .table('Ressources')
  .row(name)
  .put(
    ['Transport:name', 'Transport:image','Transport:description','Transport:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.addTransport = (req, res) => {
  name = req.body.name
  image = req.body.image
  description = req.body.description
  lien = req.body.lien

  client
  .table('Ressources')
  .row(name)
  .put(
    ['Transport:name', 'Transport:image','Transport:description','Transport:lien'],
    [name, image,description,lien],
    (error, success) => {
     res.send(success)
})
};

exports.deleteTransport = (req, res) => {
  name = req.params.name

  client
  .table('Ressources')
  .row(name)
  .delete((error, success) => {
    res.send(success)
  })
};