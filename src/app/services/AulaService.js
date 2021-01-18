
module.exports = () => ({
    
    getID: async () => {
    },
    get: async () => {
        const grupoEstudo = [
            { nome: "Excel Avançado"},
            { nome: "Plano de negócio"},
            { nome: "Contabilidade básica"},
            { nome: "Adimistração básica"},
            { nome: "HTML avançado"},
        ];
        return grupoEstudo;
    },
});
