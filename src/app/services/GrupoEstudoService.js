
module.exports = () => ({
    
    getID: async () => {
    },
    get: async () => {
        const grupoEstudo = [
            { nome: "Informática Avançada"},
            { nome: "Plano de negócio"},
            { nome: "Finanças"},
            { nome: "Marketing"},
            { nome: "Desenvolvimento Web"},
        ];
        return grupoEstudo;
    },
});
