var express = require('express')
var cors = require('cors')
var cookieSession = require('cookie-session')
const { v4: uuidv4 } = require('uuid');
var bodyParser = require('body-parser');
const { TodoWithProps } = require('../src/components/TodoWithProps');

var app = express()
 
app.use(cors());
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

app.get('/todos', function(req, res) {
  req.session.todos.push({a:1})
  res.json(req.session.todos);
});

app.get('/todos/:id', function(req, res) {
  if (!req.session.todos) {
    req.session.todos = [];
  }
  for (var i = 0; i < req.session.todos; i++) {
    if (req.session.todos[i].uuid === props.id) {
      return res.json(req.session.todos[i]);
    }
  }
  res.status(404).json();
});

app.post('/todos', function(req, res) {
  if (!req.session.todos) {
    req.session.todos = [];
  }
  if (!req.body.id) {
    req.body.id = uuidv4();
  }
  req.session.todos.push(req.body);
  res.status(201).json(req.body);
});

app.put('/todos/:id', function(req, res) {
  if (!req.session.todos) {
    req.session.todos = [];
  }
  for (var i = 0; i < req.session.todos; i++) {
    if (req.session.todos[i].uuid === props.id) {
      req.session.todos[i] = req.body;
    }
  }
  res.json(req.body);
});

app.delete('/todos/:id', function(req, res) {
  if (!req.session.todos) {
    req.session.todos = [];
  }
  req.session.todos = req.session.todos.filter(item => item.id !== props.id)
  res.status(204).json();
});

app.listen(5001, function () {
  console.log('CORS-enabled web server listening on port 80')
})