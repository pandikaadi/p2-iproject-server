if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// require("dotenv").config()


const express = require(`express`);
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 3000
const router = require(`./routes/index.js`);
const cors = require(`cors`)

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(`/`, router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
})

module.exports = app