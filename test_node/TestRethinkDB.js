const r = require('rethinkdb');

function run() {
  console.log('  -> query rethinkdb');
  return r
    .connect({ host: 'localhost' })
    .then((conn) => {
      console.log('  -> successful connection to rethinkdb');
      return r.db('Ueba').table('Anomaly')
        .run(conn)
        .then((res) => {
          conn.close();
          return res;
        });
    });
}

run().then((res) => {
  console.log(res._conn.host);
  res.next().then((val) => {
    console.log(val);
  });
});
