//Server libraries
const express = require("express");
const app = express();

//Routes are required
const mainRoute = require("./routes/mainRoute");
const aboutUsRoute = require("./routes/aboutUsRoute");
const servicesRoute = require("./routes/servicesRoute");

//Auxiliar libraries
const path = require("path");
//const methodOverride = require("method-override");

//public folder is set
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//Template engine is set
app.set("view engine", "ejs");

//Local host is being ran in port 3000
app.listen(3000, () => console.log("Local host is being ran in port 3000"));

//main Route is set
app.use("/", mainRoute);

//aboutUs Route is set
app.use("/aboutUs", aboutUsRoute);

//services Route is set
app.use("/services", servicesRoute);
