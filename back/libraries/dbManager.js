'use strict';



var dbm = require('./core/DBM');




exports.getTasks = function(fields, params, db, done) {

	var query =  "SELECT "+ fields +" FROM `tasks`";

	var result = db.get().query(query, function (err, rows) {

		if (err){
			done(err, null);
		}

		done(null, rows);
	});

}









exports.addTask = function(table, data, db, done) {

	var query = dbm._insert(table, data);

	var result = db.get().query(query, function (err, rows) {

		if (err){
			done(err, 0);
		}

		done(null, rows.insertId);
	});

}









exports.deleteTask = function(params, db, done) {

	var query =  "DELETE FROM `tasks` WHERE id=" + params.id;

	var result = db.get().query(query, function (err, rows) {

		if (err){
			done(err, null);
		}

		done(null, rows);
	});

}
