var router = require('express').Router();
var pg = require('pg');
var pool = new pg.Pool(config);

var config = { database: 'challenge' };


router.get('/', function(req, res) {

  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connectiong to DB', err);
      res.sendStatus(500);
      done();
    } else {

      client.query('SELECT * FROM giphy;', function(err, result) {
        done();
        if (err) {
          console.log('Error querying DB', err);
          res.sendStatus(500);
        } else {
          console.log('Got rows from DB', result.rows);
          res.send(result.rows);

        }
      });
    }
  });
});//end of router.get

router.post('/', function(req, res) {

  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connectiong to DB', err);
      res.sendStatus(500);
      done();
    } else {

      client.query(
        'INSERT INTO giphy (gif_url, comment) VALUES ($1, $2) RETURNING *;',
        [req.body.gif_url, req.body.comment],
        function(err, result) {
          done();
          if (err) {
            console.log('Error querying DB', err);
            res.sendStatus(500);
          } else {
            console.log('Got info from DB', result.rows);
            res.send(result.rows);

          }
        })
        // );
      } //end else
    }); //end pool.connect
  }); //end of router.post

  module.exports = router;
