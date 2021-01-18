const { createController } = require("awilix-express"); // or `awilix-router-core`
const GrupoEstudoController = require("../controllers/GrupoEstudoController");

module.exports = createController(GrupoEstudoController)
    .prefix("/grupoestudo")
    .get("/", "getGrupoEstudo");
