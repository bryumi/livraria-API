'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.sequelize.query(`
    //   CREATE TABLE livros (
    //     id INT primary key auto_increment,
    //     titulo VARCHAR(50) NOT NULL,
    //     quantidade_paginas INT NOT NULL,
    //     autor VARCHAR(50) NOT NULL,
    //     ano_lancamento VARCHAR(50) NOT NULL,
    //     estoque INT NOT NULL
    //   );
    // `);
    return queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_paginas: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      estoque: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.sequelize.query(`
    //   DROP TABLE livros
    // `);
    return queryInterface.dropTable('livros');
  }
};
