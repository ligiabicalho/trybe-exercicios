const express = require('express');

const app = express();

// const OK = 200;
const CREATED = 201;

app.use(express.json());

// app.get('/', (_req, res) => {
//   res.status(OK).json({ message: 'Olá Mundo!' });
// });

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(CREATED).json({ team: newTeam });
});

module.exports = app;