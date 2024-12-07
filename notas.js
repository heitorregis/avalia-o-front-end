const aluno = {
    nome: "João",
    notas: [7, 8, 9], 
    
    media: function() {
      let soma = 0;
      
     for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i]; 
      }
      
      return soma / this.notas.length;
    }
  };
  
  const mediaAluno = aluno.media(); // Chama a função de média
  console.log(`O aluno ${aluno.nome} tem uma média de ${mediaAluno.toFixed(2)}`); // Exibe a mensagem com a média
  