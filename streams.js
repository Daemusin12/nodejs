const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
});

const writetableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writetableStream.write(chunk);
})