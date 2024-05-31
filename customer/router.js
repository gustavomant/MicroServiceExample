const { Router } = require("express");
const router = Router();
const CustomerController = require("./CustomerController");

router.post("/customer", function(request, response) {
    new CustomerController().handle(request, response);
});

module.exports = router;