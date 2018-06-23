/* GET home page -получаем (GET) домашнюю страницу. */
module.exports.about  = function(req, res){
	res.render('generic-text', {title: 'About' });
};