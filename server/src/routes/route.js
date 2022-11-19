const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogControllers")
const validator= require("../middleware/validations")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const login = require("../controllers/loginController")


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.post("/authors", validator.authorCreateValidator, authorController.createAuthor)

router.post("/blogs", validator.blogCreateValidator, blogController.createBlog)

router.get("/blogs", blogController.getBlogs)

router.put("/blogs/:blogId", validator.updatevalidation, blogController.updateBlog)

router.delete("/blogs/:blogId", blogController.deleteBlogId)

router.delete("/blogs", authentication.authentication, authorization.authDeleteByParams, blogController.deleteBlogIdAndQuery)


//---------------Login---------

router.post("/loginUser", validator.loginvalidation, login.loginUser)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


module.exports = router;