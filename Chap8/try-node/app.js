import fs from "fs";

fs.writeFile("test.txt", "Hello World", () => {
  fs.readFile("test.txt", "utf8", (err, msg) => {
    console.log(msg);
  });
});
