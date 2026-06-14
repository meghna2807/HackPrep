require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");
const PORT = process.env.PORT;
const errorHandler = require("./src/middleware/error.middleware");

connectDb()

app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})