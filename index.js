const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

//config
//template Engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
//config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Rotas
app.get("/", (req, res) => {
  Post.findAll({ order: [["id", "DESC"]] }).then((posts) => {
    res.render("home", { posts: posts });
  });
});

app.get("/cad", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("Houve um erro: " + erro);
    });
});
//delete
app.get("/deletar/:id", (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send("Postagem deletada com sucesso!");
    })
    .catch((erro) => {
      res.send("Esta postagem não existe!");
    });
});
//Update
app.get("/edit/:id", function (req, res) {
  Post.findByPk(req.params.id)
    .then((post) => {
      res.render("form-edit", {
        id: req.params.id,
        titulo: post.titulo,
        conteudo: post.conteudo,
      });
    })
    .catch((err) => {
      res.send("Post não encontrado!");
    });
});
app.post("/editado/:id", function (req, res) {
  Post.update(
    {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(function () {
      res.redirect("/");
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(8081, (req, res) => {
  console.log("servidor Rodando na url http://localhost:8081");
});
