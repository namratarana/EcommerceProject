const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const PORT = 8081;
const routes = require('./routes');
const cors=require('cors');
const app = express();
// const config = require('./config');
app.use(cors());
//Swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

//Swagger-------------------------
const options = {
  definition: {
      openapi: "3.0.0",
      info: {
          title: "Ecommerce",
          version: "1.0.0",
          description: "This is a simple Ecommerce API made with Express and documented with Swagger",
      },
      servers: [
          {
              url: `http://localhost:8081/`,
          },
      ],
  },
  apis: ["./api-docs/api.js"],
};

const specs = swaggerJSDoc(options)
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs))
//-------------------------------


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 routes(app);
 mongoose.connect(config.mongoUrl, {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});