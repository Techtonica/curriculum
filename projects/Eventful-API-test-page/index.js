const pool = require('./connection');
const app = require('./app');

const pgConnect = () => {
  pool.connect((err, client) => {
    if (err) throw err;

    console.log('Welcome to Eventonica')
    console.log("connected as Administrator");

    app.startQuestion(() => {
      client.release();
      pool.end().then(() => process.exit());
    });
  })
}

// *Uncomment below line once you have postgreSQL setup

// pgConnect();
