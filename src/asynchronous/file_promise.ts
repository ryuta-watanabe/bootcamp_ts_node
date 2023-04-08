import * as fs from "node:fs/promises";

const main = (): void => {
  fs.readdir("./")
    .then((files) => {
      console.log(files);
    })
    .catch((err) => {
      console.error("error: ", err);
    });
};

main();
