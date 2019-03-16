const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

let authenticationToken;

app.post('/login', (req, res) => {
  if(req.body) {
    const { username, password } = req.body;

    if(username === 'admin' && password === 'admin') {
      authenticationToken = 'Token';
      res.cookie('uat', authenticationToken, {expires: new Date(Date.now() + 432000000)})
      return res.send('authenticated')
    } else {
      return res.status(401).send('Wrong Credentials')
    }
  }

  return res.status(400).send('forgot to send credentials');
});

app.get('/the-goods', (req, res) => {
  if(authenticationToken && req.cookies['uat'] === authenticationToken) {
    return res.send([
      {
        name: 'Saint Pepsi - Private Caller',
        url: 'https://www.youtube.com/watch?v=Ki-fATpXa00'
      },
      {
        name: 'VECTOR GRAPHICS: WAITING',
        url: 'https://www.youtube.com/watch?v=6jkH8z-gxdQ'
      },
      {
        name: 'SILVER RICHARDS: LATE FOR CASSANDRA',
        url: 'https://www.youtube.com/watch?v=0DCgYIeyS8w'
      },
      {
        name: 'https://www.youtube.com/watch?v=8GW6sLrK40k',
        url: 'HOME - Resonance'
      }
    ])
  } else {
    return res.status(401).cookie('uat', '').send('Not authenticated')
  }
});

app.get('/reset-authentication', (req, res) => {
  authenticationToken = undefined;
  res.send('Done')
});

app.listen(3000, () => console.log('Listening on port 3000'))
