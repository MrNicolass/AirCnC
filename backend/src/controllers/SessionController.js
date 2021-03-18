const User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { email }  = req.body;

        //Verificação para ver se o usuário já existe
        
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email }); 
        } 
        //Fim da verificação de "existência"

        return res.json(user);
    }
};