function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY DATACRIACAO DESC', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('SELECT * FROM noticias WHERE CODIGONOTICIA = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY DATACRIACAO DESC LIMIT 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}