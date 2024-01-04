// node index.js para rodar o projeto no final

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarNivel() {
    // Perguntar o nome do herói
    rl.question("Digite o nome do herói: ", function (nome) {
        // Perguntar o nível de experiência (XP)
        rl.question("Digite a quantidade de experiência do herói (XP): ", function (inputXP) {
            const quantidadeDeExperiencia = parseInt(inputXP);
            let nivel; // definir nível do Herói
            if (quantidadeDeExperiencia < 1000) {
                nivel = "Ferro";
            } else if (quantidadeDeExperiencia <= 2000) {
                nivel = "Bronze";
            } else if (quantidadeDeExperiencia <= 5000) {
                nivel = "Prata";
            } else if (quantidadeDeExperiencia <= 7000) {
                nivel = "Ouro";
            } else if (quantidadeDeExperiencia <= 8000) {
                nivel = "Platina";
            } else if (quantidadeDeExperiencia <= 9000) {
                nivel = "Ascendente";
            } else if (quantidadeDeExperiencia <= 10000) {
                nivel = "Imortal";
            } else {
                nivel = "Radiante";
            }

            // Exibir a mensagem final
            console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
            // Fechar a interface de leitura
            rl.close();
        });
    });
}

// Chamar a função para iniciar o programa
verificarNivel();
