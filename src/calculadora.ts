import promptSync from 'prompt-sync';

const prompt = promptSync();
let escolha: number;
let historico: string[] = [];

do {
    console.log(" - - CALCULADORA - - DE - - IMC - -\n\n");
    console.log(" 1 - Calcular o IMC.\n 2 - Historico de Consultas.\n 0 - Sair.");

    escolha = Number(prompt("Digite qual função quer executar: "));
    console.log(escolha);

    switch(escolha){
        case 1:
            console.log(" - Calcular IMC  - \n");
            let nome: string = prompt("Digite seu nome: ");
            let peso: number = Number(prompt(" Digite seu peso (Ex: 60): "));
            let altura: number = Number(prompt(" Digite sua altura (Ex: 1.75): "));
            let calculo: number = peso/(altura**2);
            console.log(` Seu IMC com: Peso = ${peso}, Altura = ${altura}\n Seria de ${calculo.toFixed(2)}`);
            historico.unshift(`Consulta de ${nome} com o IMC de ${calculo.toFixed(2)}`);
            break;
        case 2:
            let i:number = 1;
            console.log(" - Historico de Calculos  - \n");
            for(const consulta of historico){
                console.log(`Consulta ${i} - ${consulta}`);
                i++;
            }
            break;
        case 0:
            console.log(" Valeu por usar nossa Calculadora ^^");
            break;
        default:
            console.log(" Coloque um valor valido!!!");
            break;
    }
}while(escolha != 0);