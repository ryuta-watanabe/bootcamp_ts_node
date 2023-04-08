import * as fs from "node:fs/promises";

const main = async (): Promise<void> => {
  try {
    const files = await fs.readdir("./");
    console.log(files);
  } catch (err) {
    console.error("error: ", err);
  }
};

main();
