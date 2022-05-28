const app = require("./app");
require("dotenv").config();
const ip = require("ip");
const ipAddress = ip.address();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`API LISTENING ON PORT ${process.env.PORT}`);
    console.log(`Network access via: localhost:${port}`);
});