const express = require("express");
const bC = require("../controllers/blogControllers");
const router = express.Router();

router.get("/", bC.blog_index);
router.post("/", bC.blog_create_post);
router.get("/create", bC.blog_create_get);
router.get("/:id", bC.blog_details);
router.delete("/:id", bC.blog_delete);

module.exports = router;
