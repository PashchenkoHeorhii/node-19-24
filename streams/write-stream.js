// writable.js
const { Writable } = require("stream");
const fs = require("fs");

// Create a writable stream to output users to a file
const outputFilePath = "./processed_users.json";
const writeStream = fs.createWriteStream(outputFilePath);

// Writable Stream
const userWriteStream = new Writable({
  objectMode: true,
  write(chunk, encoding, callback) {
    // Log the user being written
    console.log("Writing User:", chunk);

    // Write user data to the output file
    writeStream.write(JSON.stringify(chunk) + "\n", encoding, callback);
  },
  final(callback) {
    console.log("All users have been written to the file.");
    writeStream.end(); // Close the write stream when done
    callback();
  },
});

module.exports = { userWriteStream };
