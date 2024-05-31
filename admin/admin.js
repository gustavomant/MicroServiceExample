const { kafka } = require("./client");

async function init(topic) {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin Connection Success...");

  console.log(`Topic Created Success ${topic}`);
  await admin.createTopics({
    topics: [
      {
        topic: topic,
      },
    ],
  });
}

init("customer-update");
init("product-update");
