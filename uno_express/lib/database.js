

var Database = function(){

}
Database.instance = null;

Database.getInstance = function() {
  if (this.instance === null) {
    this.instance = new Database();
  }
  return this.instance;
};

Database.prototype = {
  
}




exports = module.exports = Database.getInstance();
