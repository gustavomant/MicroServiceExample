const { Router } = require("express");
const router = Router();
const ProductController = require("./ProductController");

router.post("/product", function(request, response) {
    new ProductController().handle(request, response);
});

module.exports = router;