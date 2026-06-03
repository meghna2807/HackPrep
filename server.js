require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");
const PORT = process.env.PORT;

connectDb()


app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})