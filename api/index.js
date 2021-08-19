var express = require('express')
var cors = require('cors')
var cookieSession = require('cookie-session')
const { v4: uuidv4 } = require('uuid');
var bodyParser = require('body-parser');

var app = express()

app.use(cors({
  credentials: true,
  origin: (origin, next) => next(null, origin)
}));
app.set('trust proxy', 1);
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  if (!req.session.uuid) {
    req.session.uuid = uuidv4();
  }
  next();
})

app.get('/api/todos', function(req, res) {
  console.log(req.session.todos)
  if (!req.session.todos) {
    req.session.todos = [];
  }
  res.json(req.session.todos);
});

app.get('/api/todos/:id', function(req, res) {
  console.log(req.session.todos)
  if (!req.session.todos) {
    req.session.todos = [];
  }
  for (var i = 0; i < req.session.todos; i++) {
    if (req.session.todos[i].id === props.id) {
      return res.json(req.session.todos[i]);
    }
  }
  res.status(404).json();
});

app.post('/api/todos', function(req, res) {
  console.log(req.session.todos)
  if (!req.session.todos) {
    req.session.todos = [];
  }
  if (!req.body.id) {
    req.body.id = uuidv4();
  }
  req.session.todos.push(req.body);
  console.log(req.session.todos)
  res.status(201).json(req.body);
});

app.patch('/api/todos/:id', function(req, res) {
  console.log(req.params, req.session.todos)
  if (!req.session.todos) {
    req.session.todos = [];
  }
  for (var i = 0; i < req.session.todos.length; i++) {
    console.log(req.session.todos[i].id, req.params.id)
    if (req.session.todos[i].id === req.params.id) {
      req.session.todos[i] = { ...req.session.todos[i], ...req.body };
      console.log(req.session.todos)
      return res.json(req.session.todos[i]);
    }
  }
  res.status(404).json();
});

app.delete('/api/todos/:id', function(req, res) {
  console.log(req.session.todos)
  if (!req.session.todos) {
    req.session.todos = [];
  }
  req.session.todos = req.session.todos.filter(item => item.id !== req.params.id)
  console.log(req.session.todos)
  res.status(204).json();
});

app.listen(5001, function () {
  console.log('CORS-enabled web server listening on port 5001')
})
