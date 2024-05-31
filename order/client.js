const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "order-app",
  brokers: ["localhost:9092"],
});
