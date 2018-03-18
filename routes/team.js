const express = require('express');
const teamRouter = express.Router();

const teams = [
    {
        id: 0,
        name: 'Warriors'
    },{
        id: 1,
        name: 'Celtics'
    },{
        id:2,
        name: 'Rockets'
    },{
        id:3,
        name: 'Cavaliers'
    }
];

/*All routes in this file will be prepended with the word NBA teams*/
teamRouter.get('/', (req, res) => {
    res.render('index', {title: 'NBA teams'});
});

teamRouter.get('/:id', (req, res) => {
    res.render('all', {team: 'teams'})
});

//update - show update form

teamRouter.get('/:id/edit', (req, res) => {
    res.render('edit', {
        team: teams[req.params.id]
    })
});

// create
teamRouter.get('/', (req, res) => {
    const team = req.body;
    team.id = teams.length;
    teams.push(team);
    res.redirect(`/team/${team.id}`)
});
//update - update one
teamRouter.get('/:id', (req, res) => {
    const team = teams[req.params.id];
    team.name = req.body.name;
    res.redirect(`/team/${team.id}`);
});

// Delete - deletes one

teamRouter.delete('/:id', (req, res) => {
    team.aplice(req.params.id, 1);
    res.redirect('/team')
})

module.exports = teamRouter;
