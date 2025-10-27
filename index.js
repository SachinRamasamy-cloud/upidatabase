// Import json-server
const jsonServer = require("json-server");

// Create server
const server = jsonServer.create();

// Create middleware
const middleware = jsonServer.defaults();

// Import db.json
const router = jsonServer.router("db.json");

// Define port
const PORT = process.env.PORT || 3000;

// Use middleware
server.use(middleware);
server.use(router);

// Start server
server.listen(PORT, () => {
  console.log(`Resume Builder started on port ${PORT}`);
});
