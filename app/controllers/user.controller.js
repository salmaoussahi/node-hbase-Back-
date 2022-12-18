const hbase = require('hbase')
client = hbase({ host: '127.0.0.1', port: 10005 })

//User

exports.findUserByName = (req, res) => {
  name = req.params.name
  client
  .table('Utilisateur')
  .row(name)
  .get('User', (error, value) => {
    console.info(value)
    res.send(value);
  })
};

exports.updateUserByName = (req, res) => {
  name = req.params.name
  email = req.body.email
  password = req.body.password
  
  client
  .table('Utilisateur')
  .row(name)
  .put(
    ['User:name', 'User:email','User:password'],
    [email, email,password],
    (error, success) => {
     res.send(success)
})
};

exports.addUser = (req, res) => {
  name = req.body.name
  email = req.body.email
  password = req.body.password
  role = req.body.role

  client
  .table('Utilisateur')
  .row(name)
  .put(
    ['User:name', 'User:email','User:password','User:role'],
    [name, email,password,role],
    (error, success) => {
     res.send(success+"err"+error)
})
};

exports.deleteUser = (req, res) => {
  name = req.params.name

  client
  .table('Utilisateur')
  .row(name)
  .delete((error, success) => {
    res.send(success)
  })
};
