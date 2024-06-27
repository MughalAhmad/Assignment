const dotenv = require ("dotenv");
dotenv.config({path:".env"});
const express = require ("express");
const app = express();
const dataBaseConnection = require ("./config/dbConnection");
const cors = require("cors");

const authRouter = require ("./routes/authRouter");
const productRouter = require ("./routes/productRouter");

app.use(cors({
    optionsSuccessStatus: 200,
    credentials: true,
}));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server running on port: ${port}`);
    dataBaseConnection();
});
