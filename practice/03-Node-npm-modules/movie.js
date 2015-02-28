
var Movie = function(){
this._data = {};
this.set = function(mkey,mvalue){
this._data[mkey] = mvalue;
};
this.get = function(mkey){return this._data[mkey]};
}
module.exports = Movie;