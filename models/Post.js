const db = require("./db");

const Post = db.sequelize.define("postagens", {
  titulo: {
    type: db.DataTypes.STRING,
  },
  conteudo: {
    type: db.DataTypes.TEXT,
  },
});

//Post.sync({ force: true });

module.exports = Post;
