module.exports = ({ grupoEstudoService }) => ({
    execute: async (grupoEstudo) => {
        return await grupoEstudoService.get(grupoEstudo);
    },
});
