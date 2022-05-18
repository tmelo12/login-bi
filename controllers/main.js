function index(req,res){
   res.render("login")
}

function login(req, res){
    if(req.body.login === 'governador' && req.body.senha === '1705'){
        req.session.user = req.body.login;
        res.redirect("bi");
    }
    else if(req.body.login === 'coronel' && req.body.senha === '1805'){
        req.session.user = req.body.login;
        res.redirect("bi");
    }
    else if(req.body.login === 'visitante' && req.body.senha === '1905'){
        req.session.user = req.body.login;
        res.redirect("bi");
    }
    else{
        req.session.user = 'undefined';
        return res.render("login", {
            message: "Sua conta ou senha está incorreta."
        });
    }
}

function bi(req,res){
    if( req.session.user==='governador'||
        req.session.user==='coronel'||
        req.session.user==='visitante'
    ){
        res.render('bi');
    }
    else{
        res.redirect("/");
    }
}

function sair(req, res){
    req.session.user = 'undefined';
    res.redirect("/");
}

module.exports = {index, bi, login, sair}