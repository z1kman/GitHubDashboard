import  searchController from '../../controllers/searchController'
const express = require("express");
const searchRouter = express.Router();
 
searchRouter.get("/repositories", searchController.Repositories);
 
export default searchRouter;