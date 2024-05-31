const { kafka } = require("./client");

class KafkaConsumer {
  async init(model, topic, groupId) {
    const consumer = kafka.consumer({ groupId: groupId });
    await consumer.connect();
    await consumer.subscribe({ topics: [topic], fromBeginning: true });
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log(
          `${groupId}: [${topic}]: PART:${partition}:`,
          message.value.toString()
        );

        const messageToString = message.value.toString();
        const createdResource = JSON.parse(messageToString);
        await model.create({
          externalId: createdResource.id,
          ...createdResource
        });
      },
    });
  }
}

module.exports = KafkaConsumer;