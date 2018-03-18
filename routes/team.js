const express = require('express');
const teamRouter = express.Router();

/*All routes in this file will be prepended with the word NBA teams*/
teamRouter.get('/', (req, res) => {
    res.render('index', {title: 'NBA teams'});
});





module.exports = teamRouter;
