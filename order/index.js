const express = require("express");
// const router = require('./router');
const KafkaConsumer = require("./consumer");
const Customer = require('./Customer');
const Product = require('./Product');

const app = express();
app.use(express.json());
// app.use(router);
const PORT = 8082;

(async () => {
    const database = require('./db');
    const Customer = require('./Customer');
    const Product = require('./Product');
    const Order = require('./Order');
 
    try {
        const result = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.listen(PORT, function() {
	console.log(`server running on localhost ${PORT}`);
});

const kafkaConsumer = new KafkaConsumer();
kafkaConsumer.init(Customer, "customer-updates", "customer");
kafkaConsumer.init(Product, "product-updates", "product");