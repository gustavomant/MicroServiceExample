const Product = require("./Product");
const KafkaProducer = require("./producer");

class ProductController {
    async handle(request, response) {
        const createdProduct = await Product.create({
            ...request.body
        });

        const kafkaSendMessage = new KafkaProducer();
        await kafkaSendMessage.send(createdProduct);
        return response.json(createdProduct);
    }
}

module.exports = ProductController;