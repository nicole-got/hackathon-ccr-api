module.exports = ({ projetoService }) => ({
    execute: async (projeto) => {
        return await projetoService.get(projeto);
    },
});
