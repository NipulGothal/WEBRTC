
const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3000

// app.get('/', (req, res) => {
//   res.send("IT'S WORKING!")
// })




//...

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(3000, () => {
  console.log('Listening...')
})

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.info('listening on %d', port);
// });
