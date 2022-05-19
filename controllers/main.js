function index(req,res){
   res.render("login")
}

function login(req, res){
    if(req.body.login === 'governo' && req.body.senha === 'gov@2022'){
        req.session.user = req.body.login;
        res.redirect("bi");
    }
    else if(req.body.login === 'dc-seas' && req.body.senha === 'dc@2022'){
        req.session.user = req.body.login;
        res.redirect("bi");
    }
    else if(req.body.login === 'visitante' && req.body.senha === 'vis@2022'){
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
    if( req.session.user==='governo' ){
        res.render('bi');
    }
    else if( req.session.user==='dc-seas' ){
        res.render('bi_seas')
    }
    else if( req.session.user==='visitante' ){
        res.render('bi_vis')
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