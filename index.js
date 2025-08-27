// Classificador de nivel de heroi

var rds = require("readline-sync");   // objeto para ler dados do terminal

// Função para Classificar o heroi 
function classificaHeroi (xp) {
    let classe = "";

    if (xp <= 1000) {
        classe = "Ferro";
    } else  if ((xp > 1000) && (xp <= 2000 )) {
            classe = "Bronze";
        } else if ((xp > 2000) && (xp <= 5000 )) {
                classe = "Prata";
            } else if ((xp > 5000) && (xp <= 7000 )) {
                    classe = "Ouro";
                } else if ((xp > 7000) && (xp <= 8000 )) {
                        classe = "Platina";
                    } else if ((xp > 8000) && (xp <= 9000 )) {
                            classe = "Ascendente";
                }       else if ((xp > 9000) && (xp <= 10000 )) {
                                classe = "Imortal";
                    }       else if (xp > 10000) {
                                     classe = "Radiante";
                        }        else {
                                        classe = "Erro na classificacao!";
                }
    return classe;
}
// Inicia o laço
do {
    console.log("\nOlá aventureiro, seja bem vindo ao classificador de herói. ")
    var nomeHeroi = rds.question("Digite o nome do heroi: ");
    var xpHeroi = rds.question("Digite a XP (experiencia) do heroi: ");
    console.log(`Processando informaçãoes...\n\n`);

    var nivel = classificaHeroi(xpHeroi);

    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}\n\n`);
    
    var resposta = rds.question("Deseja classificar outro Heroi ? [S] SIM | [N] NAO: ");
    resposta =  resposta.toUpperCase();

    while ((resposta != "S") && (resposta != "N")){
        resposta = rds.question("Opcao incorreta. Digite [S] SIM | [N] NAO: ");
        resposta =  resposta.toUpperCase();        
    }

    switch (resposta){
        case "S":
            continua = true;
            break;

        case "N": 
            continua = false;
            break;

        default:
            console.log("\nOpcao invalida. Fechando classificador! \n");
            continua = false;
            break;

        
    }
} while (continua)

    console.log("\nObrigado por usar o classificador. Ate breve!");
    console.log("\nMatrix Maraba agradece a sua preferencia.");