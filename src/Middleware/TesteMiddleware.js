const TestMiddleware = {
  testemiddle: (req, res, next) => {
    console.log(`pagina requisitada ${req.query.page}`);
    if (req.query.page == "2") {
      console.log("entrou");
      next();
      // validação com Middleware
    } else {
      return res.json({ msg: "erro" });
    }
  },
};

module.exports = TestMiddleware;
