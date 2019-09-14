const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config');

//setarea bazei de date
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', (err) => console.log(err));

const user = require('./routes/api/user.route');
const post = require('./routes/api/post.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use('/api/users', user);
app.use('/api/posts', post);

app.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, {useNewUrlParser:true});
});