const { livroModel } = require('../database');

const livrosController = {
  index: async (request, response) => {
    const livros = await livroModel.findAll();

    response.json(livros);
  },
  update: async (request, response) => {
    const { id } = request.params;
    const { titulo, quantidadePaginas, autor, anoLancamento, estoque } = request.body;

    const livro = await livroModel.findByPk(id);

    if (!livro) {
      return response.status(404).json({
        error: `O livro com id ${id} não existe`
      });
    }

    Object.assign(livro, { titulo, quantidadePaginas, autor, anoLancamento, estoque });

    await livro.save();

    return response.json(livro);
  }
}

// await livroModel.update({
//   titulo,
//   quantidadePaginas,
//   autor,
//   anoLancamento,
//   estoque
// }, {
//   where: {
//     id
//   }
// });

// const livro = await livroModel.findByPk(id);
module.exports = livrosController;