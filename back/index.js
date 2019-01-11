const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

app.use(express.urlencoded());
app.use(express.json());



const SELECT_ALL_TASK = 'select * from tasks';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gma404036672',
  database: 'rt_tasks'
});

connection.connect(err => {
  if(err){
    console.log(err);
    return err;
  }
});


app.use(cors());


app.get('/', (req, res) => {
  res.send('404 not found');
})









app.delete('/tasks/delete', (req, res) => {

    const DELETE_TASK = `DELETE FROM tasks WHERE id = ${req.body.id}`;

    connection.query(DELETE_TASK, (err, results) => {
      if(err){
        return res.send(err);
      }
      else{
        return res.send('deleted');
      }
    })
});








app.post('/tasks/add', (req, res) => {

    const INSERT_TASK = `INSERT INTO tasks (title, responsible, description, priority)`
                      + ` VALUES ('${req.body.title}', '${req.body.responsible}', '${req.body.description}', ${req.body.priority})`;

    connection.query(INSERT_TASK, (err, results) => {
      if(err){
        return res.send(err);
      }
      else{
        return res.send('saved');
      }
    })
});









app.get('/tasks', (req, res) => {
  connection.query(SELECT_ALL_TASK, (err, results) =>{
    if(err){
      return res.send(err);
    }
    else{
      return res.json({
        data: results
      });
    }
  })
});









app.listen(4000, () => {
  console.log('API ready on port 4000');
})
