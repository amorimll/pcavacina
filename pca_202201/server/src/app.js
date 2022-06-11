const mongoose = require('mongoose')
const express = require('express');
const CONNECTION_URL = "mongodb://localhost/pca202201";
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser')
const cors = require('cors')
const postRoutes = require('./routes/postTeste.js');
const getRoutes = require('./routes/getTeste.js')

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)
app.use('/gets', getRoutes)

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, function () {
  console.log(`Server Iniciado na porta ${PORT}`);
});

app.use(express.json());
