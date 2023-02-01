const express = require('express');

const app = express();

const OK = 200;
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

app.get('/teams', (_req, res) => res.status(OK).json({ teams }));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;

  const team = teams.find((t) => t.id === Number(id));

  res.status(OK).json({ team });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(CREATED).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

module.exports = app;