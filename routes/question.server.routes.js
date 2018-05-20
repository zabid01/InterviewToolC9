module.exports = function(app){

 var questions = require('./../controllers/questions.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/questions')
	.get(questions.list)
	.post(users.requiresLogin, questions.create);

  app.route('/api/questions/:questionId')
	.get(questions.read)
  .delete(users.requiresLogin, questions.delete);

	app.route('/api/questions/edit/:questionId')
	.get(questions.read)
	.put(users.requiresLogin, questions.update);

app.route('/History').get(questions.History);   
app.route('/Admin').get(questions.Admin);   
app.route('/SavedPack').get(questions.SavedPack);   
app.route('/AddCusQues').get(questions.AddCusQues);   


app.param('questionId', questions.questionByID);


}
