let tarefas = [];

for (let i = 1; i <= 5; i++) {
    let tarefa = prompt(`Digite a tarefa ${i}:`);
    tarefas.push(tarefa); 
}

console.log("Lista de tarefas:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}. ${tarefas[i]}`);
}

let tarefaConcluida = prompt("Qual tarefa você deseja marcar como concluída? (Digite o número da tarefa):");

let indice = parseInt(tarefaConcluida) - 1;
if (indice >= 0 && indice < tarefas.length) {
    let tarefaRemovida = tarefas.splice(indice, 1); 
    console.log(`A tarefa "${tarefaRemovida}" foi marcada como concluída.`);
} else {
    console.log("Número de tarefa inválido.");
}

console.log("Lista atualizada de tarefas:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}. ${tarefas[i]}`);
}
