const produtos = [
    { nome: "Produto A", preco: 10, quantidade: 100 },
    { nome: "Produto B", preco: 20, quantidade: 50 },
    { nome: "Produto C", preco: 30, quantidade: 30 }
  ];
  
  function calcularValorEstoque(produtos) {
    let valorTotal = 0; 
    
    for (let i = 0; i < produtos.length; i++) {
      valorTotal += produtos[i].preco * produtos[i].quantidade;
    }
  
    return valorTotal; 
  }
  const valorEstoque = calcularValorEstoque(produtos);
  console.log(`O valor total do estoque é R$ ${valorEstoque.toFixed(2)}`);
  