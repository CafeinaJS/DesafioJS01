let somaNotas = 0;
let mediaNotas = 0;
let mensagem = "";
const numNotas = 4;

for (let i=1; i<= numNotas; i++) {
    somaNotas += Number(prompt("Informe a nota " + i));
}

mediaNotas = somaNotas / numNotas;
mensagem += `A média do aluno é ${mediaNotas}\n`;

if (mediaNotas < 4) {
    mensagem += "O aluno está reprovado";
} else if (mediaNotas >= 6) {
    mensagem += "O aluno está aprovado";
} else {
    mensagem += "O aluno está de recuperação";
}

alert(mensagem);