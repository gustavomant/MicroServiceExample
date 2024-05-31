const express = require("express");
const router = require('./router');

const app = express();
app.use(express.json());
app.use(router);
const PORT = 8080;

(async () => {
    const database = require('./db');
    const Customer = require('./Customer');
 
    try {
		Customer
        const result = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.listen(PORT, function() {
	console.log(`server running on localhost ${PORT}`);
});
