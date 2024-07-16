require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api/footballers', require('./routes/footballerRoutes'));
app.use(errorHandler);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log('Server is starting on port:' + PORT));
});

