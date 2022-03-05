const express = require("express");
const app = express();
const movieRoutes = require('./src/routes/movies');
const mongoose = require('mongoose');
const authenticationRoutes = require('./src/routes/authentication');
const bodyParser = require('body-parser');

// export MONGO_PASSWORD='WRITE_PASSWORD'
const username = process.env.MONGO_USERNAME || 'dbUser';
const password = process.env.MONGO_PASSWORD || 'dbUser777';
const database = "sample_mflix";

const connectionLink = `mongodb+srv://${username}:${password}@shopping-card.yjiw6.mongodb.net/${database}?retryWrites=true&w=majority`;
mongoose.connect(connectionLink,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
  );

  mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/movie', movieRoutes);
app.use('/authentication', authenticationRoutes)

app.listen(3000, () => {
    console.log('Server is started');
});