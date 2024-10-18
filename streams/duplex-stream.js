// duplex.js
const { Duplex } = require("stream");

// Duplex Stream to handle both reading and writing
const duplexStream = new Duplex({
  objectMode: true,
  read() {
    // No custom readable logic here; we'll handle reads through piping
  },
  write(chunk, encoding, callback) {
    console.log("Processing User in Duplex:", chunk);

    // if (chunk.id === 12) duplexStream.destroy();

    // Simulate additional processing if necessary
    setTimeout(() => {
      console.log(`Finished processing User ID: ${chunk.id}`);
      this.push(chunk); // Push the processed user data downstream
      callback();
    }, 100);
  },
});

module.exports = { duplexStream };
