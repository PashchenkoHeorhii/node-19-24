const fs = require("fs");
const JSONStream = require("JSONStream");
const { userWriteStream } = require("./write-stream");
const { duplexStream } = require("./duplex-stream");

const filePath = "./users_data.json";

const readStream = fs.createReadStream(filePath);

const parser = JSONStream.parse("*");

const readFunction = (context) => {
  console.log(context);
};

const writeFunction = (context) => {};

// Read -> Duplex -> Writable pipeline
readStream
  .pipe(parser) // Each user object will be processed one by one
  .pipe(duplexStream) // Process the user with duplex stream
  .pipe(userWriteStream) // Write processed users to the output file
  .on("finish", () => {
    console.log("All users processed through Duplex and written to file.");
  })
  .on("error", (err) => {
    console.error("Error while processing:", err);
  });
