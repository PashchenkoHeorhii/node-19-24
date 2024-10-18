const amqp = require("amqplib");

module.exports.recieveFromQueue = async () => {
  try {
    const conn = await amqp.connect("amqp://localhost");
    const channel = await conn.createChannel();
    const queue = "test-queue"; // Use the same queue name as the producer

    await channel.assertQueue(queue, { durable: false });
    console.log("Waiting for messages to pass in...");

    channel.consume(
      queue,
      (msg) => {
        if (msg !== null) {
          console.log(`Received message: ${msg.content.toString()}`);
        }
      },
      { noAck: true }
    );
  } catch (err) {
    console.error("Error in consumer:", err);
  }
};
