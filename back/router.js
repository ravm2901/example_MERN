const express = require('express');
const router  = express.Router();
const lib     = require("./libraries/libraries");



router.get('/', (req, res) => {
  res.send('404 not found');
})









router.delete('/tasks/delete', (req, res) => {

	lib.DBM.deleteTask({id:req.body.id},  lib.db, function(err, rows){
		if(err){
			return res.send(err);
		}
		else{
			return res.send('deleted');
		}
	});

});








router.post('/tasks/add', (req, res) => {

	lib.DBM.addTask('tasks', [req.body], lib.db, function(err, rowId){

		if(err){
			return res.send(err);
		}
		else{
			return res.send('saved');
		}

	})

});









router.get('/tasks', (req, res) => {

  lib.DBM.getTasks('*', null, lib.db, function(err, rows){
		if(err){
			return res.send(err);
		}
		else{
			return res.json({
				data: rows
			})
		}
	});

});


module.exports = router;
