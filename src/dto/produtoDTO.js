// produtoDTO.js, nada mais é que um data transfer object, ou seja, um objeto que vai garantir que os dados que estamos recebendo estão no formato correto antes de serem salvos no banco de dados.
export function produtoRequestDTO(body) {
  return {
    nome: body.nome,
    preco: body.preco,
    categoria: body.categoria,
  };
}

export function produtoResponseDTO(produto) {
  return {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    categoria: produto.categoria,
    imagemUrl: produto.imagemUrl,
    createdAt: produto.createdAt,
    updatedAt: produto.updatedAt,
  };
}
