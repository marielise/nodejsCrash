const fs = require("fs");
const path = require("path");

//Create a folder
fs.mkdir(path.join(__dirname, "test"), {}, function(err) {
  if (err) throw err;
  console.log("Folder created ...");
});

fs.mkdir(path.join(__dirname, "testArrowFunction"), {}, err => {
  if (err) throw err;
  console.log("Folder created ...");
});

//create a file

fs.writeFile(path.join(__dirname, "test", "hello.txt"), "Something 1", err => {
  if (err) throw err;
  console.log("File written ...");
});

fs.writeFile(path.join(__dirname, "test", "hello.txt"), "Something 2", err => {
  if (err) throw err;
  console.log("File written ...");
  fs.appendFile(
    path.join(__dirname, "test", "hello.txt"),
    " The following 2",
    err => {
      if (err) throw err;
      console.log("File written 2 ...");
    }
  );
});

fs.readFile(path.join(__dirname, "test", "hello.txt"), (err, data) => {
  if (err) throw err;
  console.log(data);
}); //if don't put format, => <Buffer 53 6f 6d 65 74 68 69 6e 67 20 32>

fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); //with Utf8 => Something 2
//File written 2 ...

//Actually because Async, the append is happening after the readFile
