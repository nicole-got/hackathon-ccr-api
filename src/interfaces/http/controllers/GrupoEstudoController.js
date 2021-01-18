const API = ({
    getGrupoEstudoOperation,
}) => ({
    getGrupoEstudo: async (req, res) => {
        const grupoEstudo = await getGrupoEstudoOperation.execute();
        res.send({ status: 200, result: grupoEstudo });
    },
});

module.exports = API;
