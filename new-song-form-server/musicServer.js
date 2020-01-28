//must change route and directory names to work
// const fetch = require('node-fetch');
const mysql = require('mysql');
const express = require('express'),
server = express()

server.set('port', process.env.PORT || 3001);

server.use(express.static('public'))
server.use(express.urlencoded())

const conn = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "Nellydog1"
});

//Adding route
server.get('/', (request, response) => {
     response.sendFile(__dirname + '/newSong.html');
});

// !When song submission is made here, the form data (req.body) is made into array and sent to MySql
server.post('/new-song-submission', (req, res) => {
     conn.connect(err => {
          const insertInto = `INSERT INTO songdata.songs (title, genre,  duration, comments, audioUrl) VALUES ?`;
          let newSongData = Object.values(req.body);

          if (err) throw err;
          console.log('Connected Bitches!');
          conn.query(insertInto, [[newSongData]], ((err, res) => {
               if (err) throw err;
               console.log(`Number of records inserted: ${res.affectedRows}`);
          }))
     });
     res.end();
});

server.listen(3001, () => {
     console.log('Express server started at port 3000');
});
