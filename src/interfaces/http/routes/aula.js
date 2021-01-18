const { createController } = require("awilix-express"); // or `awilix-router-core`
const AulaController = require("../controllers/AulaController");

module.exports = createController(AulaController)
    .prefix("/aula")
    .get("/", "getAula");
