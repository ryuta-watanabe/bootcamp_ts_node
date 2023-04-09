import * as fs from "node:fs";
import http from "node:http";
import path from "path";
const server = http.createServer();

type mimeTypes = {
  [key: string]: string;
};

server.on("request", async (req, res) => {
  let filePath = `./public${req.url}`;
  if (filePath === "/") filePath = "./index.html";
  console.log("filePath: ", filePath);

  const extname: string = String(path.extname(filePath)).toLowerCase();
  const mimeTypes: mimeTypes = {
    ".html": "text/html",
    ".json": "text/json",
    ".jpg": "image/jpeg",
    ".ico": "image/x-icon",
  };
  const contentType: string = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    console.log("content: ", content);
    if (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found");
        res.end();
      } else {
        res.writeHead(500);
        res.end(
          `Sorry, check with the site admin for error: ${error.code} ..\n`
        );
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(process.env.PORT || 12345, () => {
  console.log("listen!");
});

console.log("run server.js");
