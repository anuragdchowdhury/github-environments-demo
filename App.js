const fs = require("fs");

const config = {
  environment: process.env.APP_ENV,
  apiUrl: process.env.API_URL,
  mode: process.env.APP_MODE
};

console.log("Application started!");
console.log("Configuration:", config);

fs.writeFileSync(
  "output.json",
  JSON.stringify(config, null, 2)
);
