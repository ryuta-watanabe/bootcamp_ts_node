import http from "node:http";
const server = http.createServer();

server.on("request", async (req, res) => {
  console.log("request url: ", req.url);
  // Content-Type is important for browsers.
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("hello!\n");
  res.end();
});

server.on("listening", () => {
  console.log("start listening!");
});

// Start listening 12345 port of localhost (127.0.0.1).
server.listen(12345, () => {
  console.log("listening on http://localhost:12345/");
});
console.log("run server.js");
