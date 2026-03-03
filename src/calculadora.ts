import promptSync from 'prompt-sync';

const prompt = promptSync();
let escolha: number;

do {
    console.log(" - - CALCULADORA - - DE - - IMC - -\n\n");
    console.log("1 - Calcular o IMC.\n 2 - Historico de Consultas.\n 0 - Sair.");

    escolha = Number(prompt("Digite qual função quer executar: "));
    console.log(escolha);
}while(escolha != 0);