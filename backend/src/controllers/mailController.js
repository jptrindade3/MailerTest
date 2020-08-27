const nodemailer = require('nodemailer');
require('dotenv').config();
//Acessp a app menos seguro

module.exports = {
    test(req,res){
        res.send('Hello world ta atualizando e tá no arquivo de rotas e com controllers');
    },

    sendMail(req, res){
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: "465",
            secure: "true",
            auth: {
                user: `${process.env.GMAIL_LOGIN}`,
                pass: `${process.env.GMAIL_PASS}`
            }
        });

        transporter.sendMail({
            from:`João Trindade <${process.env.GMAIL_LOGIN}>`,
            to: `${process.env.GMAIL_LOGIN_TO_SEND}`,
            subject:"teste de envio",
            text: "Colé zé, tomara que tenha funcionado o código",
            html:"Colé zé, tomara que tenha funcionado o código <br> <a href='https://github.com/jptrindade3'> Meu GitHub </a> <br> <img src='https://source.unsplash.com/bZZp1PmHI0E/1600x900'>"
        }).then( message => {
            console.log(message);
        }).catch(err => {
            console.log(err);
        });

        res.send('foi');
    }
};