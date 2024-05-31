const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "customer-app",
  brokers: ["localhost:9092"],
});
