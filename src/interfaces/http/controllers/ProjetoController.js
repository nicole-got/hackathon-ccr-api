const API = ({
    getProjetoOperation,
}) => ({
    getProjeto: async (req, res) => {
        const projeto = await getProjetoOperation.execute();
        res.send({ status: 200, result: projeto });
    },
});

module.exports = API;
