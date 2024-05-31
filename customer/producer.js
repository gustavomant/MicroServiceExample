const { kafka } = require("./client");

class KafkaProducer {
  async send(customer) {
    const producer = kafka.producer();
  
    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");
  
    await producer.send({
      topic: "customer-updates",
      messages: [
        {
          key: "customer-update",
          value: JSON.stringify({
            id: customer.id,
            email: customer.email
          }),
        },
      ],
    });
  }
}

module.exports = KafkaProducer;