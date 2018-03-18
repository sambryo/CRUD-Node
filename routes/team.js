const express = require('express');
const teamRouter = express.Router();

const teams = [{
    id:0,
    name: 'Warriors'
}, {
    id: 1,
    name:'Rockets'
}, {
    id:2,
    name: 'Celtics'
}, {
    id: 3,
    name : 'Cavaliers'
}];

teamRouter.get('/', (req, res) => {
    res.render('all' {Teams: 'Teams'})
});
