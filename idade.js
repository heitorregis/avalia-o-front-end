function cadastrarPessoas() {
    const pessoas = []; 
    for (let i = 0; i < 5; i++) {
      const nome = prompt("Digite o nome da pessoa:");
      const idade = parseInt(prompt("Digite a idade da pessoa:"));
  
     
      pessoas.push({ nome, idade });
    }
  
    return pessoas; 
  }
  
  function exibirPessoasMaiorDeIdade(pessoas) {
    for (let i = 0; i < pessoas.length; i++) {
      if (pessoas[i].idade > 18) {
        console.log(pessoas[i].nome); 
      }
    }
  }
  
  const pessoas = cadastrarPessoas();
  
  exibirPessoasMaiorDeIdade(pessoas);
  