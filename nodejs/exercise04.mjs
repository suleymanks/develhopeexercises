import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    `<html>
      <body>
        <h1>This page was served with Node.js!</h1>
        <p>Welcome to my server!</p>
        <label>How do you like your coffee?</label>
          <select>
            <option value="option1">Espresso</option>
            <option value="option2">Cappucino</option>
            <option value="option3">Mocha</option>
            <option value="option4">Latte</option>
          </select>
      </body>
    </html>`
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

// Change the HTML response
// dropdown menu
// Our HTTP server sends an HTML response body.

// Replace the text in the HTML with your own message. Run the server and use your web browser to test your changes.
