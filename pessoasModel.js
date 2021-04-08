var mongoose = require('mongoose');

//schema
var pessoasSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telef: {
        type: String,
        required: true
    },
    morada: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Pessoas Model
var Pessoas = module.exports = mongoose.model('pessoas', pessoasSchema);

module.exports.get = function (callback, limit) {
   Pessoas.find(callback).limit(limit); 
}