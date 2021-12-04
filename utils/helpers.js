// Referencing (https://stackoverflow.com/questions/21737057/handlebars-with-express-different-html-head-for-different-pages/21740214)
module.exports = {
    section: function(name, options){
        if(!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
    }
}