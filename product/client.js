const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "product-app",
  brokers: ["localhost:9092"],
});
