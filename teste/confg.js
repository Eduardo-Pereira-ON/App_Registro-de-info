const Postagem = sequelize.define("postagens", {
  titulo: {
    type: DataTypes.STRING,
  },
  conteudo: {
    type: DataTypes.TEXT,
  },
});

const Usuario = sequelize.define("usuarios", {
  nome: {
    type: DataTypes.STRING,
  },
  sobrenome: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
});

/*sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.log("Falha ao se conectar:" + error);
  });*/
