const MongoClient = require('mongodb').MongoClient;

const mongoConfig = {
  serverUrl: 'mongodb+srv://WojciechUMC:superzadanienaMoodle@cluster0.psh0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  database: 'WojciechUMC'
};

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};
//	hasło: superzadanienaMoodle