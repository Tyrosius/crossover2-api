import express from "express"
// importing the client here is necessary to establish the connection to the db
/* import client from './db/client.js'; */
import errorHandler from "./middleware/errorHandler.js";
/* import productRoutes from "./routes/productRoutes.js"; */

const port = process.env.Port || 3001
const app = express()

// middleware applied on all routes to be able to read the req.body in JSON
app.use(express.json());

/* app.use("/product", productRoutes); */
app.use(errorHandler);

// send message on home route, for connection test only
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})