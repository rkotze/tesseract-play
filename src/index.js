const fs = require("fs");
const Tesseract = require("tesseract.js");

const fileName = "meat-mission";

Tesseract.recognize("./images/" + fileName + ".jpg", "eng", {
  logger: (m) => console.log(m),
})
  .then(({ data: { text } }) => {
    console.log(text);
    fs.writeFileSync("./results/" + fileName + ".txt", text);
  })
  .catch((err) => {
    console.log(err);
  });
