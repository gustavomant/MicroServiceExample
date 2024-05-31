const Customer = require("./Customer");
const KafkaProducer = require('./producer');

class CustomerController {
    async handle(request, response) {
        const customerCreated = await Customer.create({
            ...request.body
        });

        const kafkaProducer = new KafkaProducer();
        await kafkaProducer.send(customerCreated);
        return response.json(customerCreated);
    }
}

module.exports = CustomerController;