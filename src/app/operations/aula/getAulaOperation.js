module.exports = ({ aulaService }) => ({
    execute: async (aula) => {
        return await aulaService.get(aula);
    },
});
