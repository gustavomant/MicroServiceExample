const express = require("express");
const router = require("./router");

const app = express();
app.use(express.json());
app.use(router);

const PORT = 8081;

(async () => {
    const database = require('./db');
    const Product = require('./Product');
 
    try {
		Product
        const result = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.listen(PORT, function() {
	console.log(`server running on localhost ${PORT}`);
});
