const { kafka } = require("./client");

class KafkaProducer {
  async send(product) {
    const producer = kafka.producer();
  
    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");
  
    await producer.send({
      topic: "product-updates",
      messages: [
        {
          key: "product-update",
          value: JSON.stringify(product),
        },
      ],
    });
  }
}

module.exports = KafkaProducer;