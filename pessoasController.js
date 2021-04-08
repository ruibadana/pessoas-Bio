//Import Pessoas Model
Pessoas = require('./pessoasModel');

//Para index
exports.index = function (req, res) {
    Pessoas.get(function (err, pessoas) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "OK",
            message: "Nova Pessoa obtida com sucesso",
            data: pessoas       
        });
    });
};

//Criar nova BIO
exports.add = function (req, res) {
    var pessoas = new Pessoas();
    pessoas.nome = req.body.nome? req.body.nome: pessoas.nome;
    pessoas.email = req.body.email;
    pessoas.telef = req.body.telef;
    pessoas.morada = req.body.morada;

    //Guardar e verificar erros
    pessoas.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "Nova Pessoa Adicionada!",
            data: pessoas
        });
    });
};

// Ver Pessoas
exports.view = function (req, res) {
    Pessoas.findById(req.params.pessoas_id, function (err, pessoas) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes da Pessoa',
            data: pessoas
        });
    });
};

// Atualizar Pessoas
exports.update = function (req, res) {
    Pessoas.findById(req.params.pessoas_id, function (err, pessoas) {
        if (err)
            res.send(err);
        pessoas.nome = req.body.nome ? req.body.nome : pessoas.nome;
        pessoas.email = req.body.email;
        pessoas.telef = req.body.telef;
        pessoas.morada = req.body.morada;

        //Guardar e verificar erros
        pessoas.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Pessoas Updated Successfully",
                data: pessoas
            });
        });
    });
};

// Apagar Pessoas
exports.delete = function (req, res) {
    Pessoas.deleteOne({
        _id: req.params.pessoas_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "OK",
            message: 'Pessoas Eliminada!'
        });
    });
};