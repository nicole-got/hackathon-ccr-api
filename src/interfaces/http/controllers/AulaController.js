const API = ({
    getAulaOperation,
}) => ({
     getAula: async (req, res) => {
        const aula = await  getAulaOperation.execute();
        res.send({ status: 200, result: aula });
    },
});

module.exports = API;
