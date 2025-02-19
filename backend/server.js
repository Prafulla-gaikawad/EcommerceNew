const express = require("express");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth/auth-routes");
const commonFeatureRouter = require("./routes/common/feature-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopOrderRouter = require("./routes/shop/order-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopProductsRouter = require("./routes/shop/products-routes");
const shopAddressRouter = require("./routes/shop/address-routes");

const app = express();
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://praful:praful123@cluster0.ojdqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/common/feature", commonFeatureRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/address", shopAddressRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
