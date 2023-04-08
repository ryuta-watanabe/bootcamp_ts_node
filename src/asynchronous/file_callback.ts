import * as fs from "node:fs";

const main = (): void => {
  fs.readdir("./", (err, files) => {
    if (err !== null) {
      console.error("error: ", err);
      return;
    }
    console.log(files);
  });
};

main();
