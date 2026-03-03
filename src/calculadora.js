"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var escolha;
do {
    console.log(" - - CALCULADORA - - DE - - IMC - -\n\n");
    console.log("1 - Calcular o IMC.\n 2 - Historico de Consultas.\n 0 - Sair.");
    escolha = Number(prompt("Digite qual função quer executar: "));
    console.log(escolha);
} while (escolha != 0);
