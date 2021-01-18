const { createController } = require("awilix-express"); // or `awilix-router-core`
const ProjetoController = require("../controllers/ProjetoController");

module.exports = createController(ProjetoController)
    .prefix("/projeto")
    .get("/", "getProjeto");
