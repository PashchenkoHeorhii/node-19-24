const fs = require("fs");
const JSONStream = require("JSONStream");

// Path to your JSON file
const filePath = "./users_data.json"; // Adjust this path to your JSON file

// Create a readable stream from the file

const readStream = fs.createReadStream(filePath);

// Create a JSONStream parser that extracts each user object from the "users" array
const parser = JSONStream.parse("*");

// Pipe the file read stream into the JSON parser
readStream
  .pipe(parser) // Each user object will be processed one by one
  .on("data", (user) => {
    // Log the user ID
    console.log("Processing User ID:", user.id);

    const file = fs.readFile(user.image);
    // Simulate asynchronous processing, e.g., writing to a database, calling an API, etc.
    setTimeout(() => {
      console.log(`Finished processing User ID: ${user.id}`);
    }, 1000);
  })
  .on("end", () => {
    // Called when the entire file has been processed
    console.log("All users processed.");
  })
  .on("error", (err) => {
    // Handle any errors that occur during streaming
    console.error("Error while processing:", err);
  });
