const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "admin-app",
  brokers: ["localhost:9092"],
});
