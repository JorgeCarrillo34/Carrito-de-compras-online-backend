const { response } = require('express');
const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../database');  
const nodemailer = require("nodemailer");
var async = require('async');
//var name1, correo1;
var a={},b={};
var str='',cont=0, iva=0, envio;
const { jsPDF } = require("jspdf");


router.get('/based', (req,res) => {
    mysqlConnection.query('SELECT * FROM parcial_dos.productos; ', (err,rows,fields) =>{
    if(!err){ 
       res.json(rows);
    }
    else{
         console.log(err);
        }
    })
});


router.post('/login',(req, res)=>{
    
    const name=req.body.name;
    const password=req.body.password;

    if(name && password){
            mysqlConnection.query('select * from users where name = ' + "'" + name  + "'" + ' and password = '+ "'" +  password + "'" , async function(error, results){
                //console.log('select * from users where name = ' + "'" + [name]  + "'" + ' and password = '+ "'" +  [password] + "'");
                if(results.length==0){
                    console.log("mala pa")
                    res.sendStatus(400);
                    
                }else{
                    console.log("buena pa");
                    //console.log(results[0].name);
                    a.name=results[0].name;
                    a.correo=results[0].correo;
                    a.dirección=results[0].direccion;
                    a.password=results[0].password;
                    a.numero=results[0].numero;
                    a.rol=results[0].rol;
                    //console.log(a);
                    if(a.rol == 'usuario'){
                        res.sendStatus(200);
                    }else{
                        res.sendStatus(304);
                    }
                    
                }
                //console.log(a);
      //          callback(null,a);

            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                user: 'jorgecardi00@gmail.com', // generated ethereal user
                pass: 'hwrewswpxcmnpsdu', // generated ethereal password
                },
            });
            console.log(a);
            
            let info = await transporter.sendMail({
                from: ' "Bienvenido al aplicativo 👻" <jorgecardi00@hotmail.com>', // sender address
                to: `${a.correo}`, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Bienvenido al aplicativo", // plain text body
                html: "<b>Bienvenido al aplicativo pa, su clave es: </b>" + `${a.password}` + "<b> y su nombre de usuario es </b>" + `${a.name}`, // html body
            });

            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            

        });

    }

console.log(b);
})


router.post('/register',async (req, res)=>{

    console.log(req.body);

    const name=req.body.name;
    const password=req.body.password;
    const numero=req.body.numero;
    const direccion=req.body.direccion;
    const correo=req.body.correo;
    const rol=req.body.rol;
    
    mysqlConnection.query('INSERT INTO users SET ?', {name:name, rol:rol, password:password, numero:numero, correo:correo, direccion:direccion}, async (error, results)=>{
        if(error){
            console.log(error);
            res.sendStatus(400);
        }else{
            console.log("buena pa");
            res.sendStatus(200);
        }
    });
})

router.post('/email',async (req, res)=>{

    let testAccount = await nodemailer.createTestAccount();
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    //console.log(hoy.toDateString());

    //str = hoy.toDateString() + "\n";

    if(req.body['0'] != null){
        console.log("buena pa");
        str += "\n" + req.body['0'].title + " por un precio de  $" + req.body['0'].precio + " pesos por " + req.body['0'].cantidad + " unidades"   + "\n";
        cont+=Number(req.body['0'].precio);
    }
    if(req.body['1'] != null){
        console.log("buena pa");
        str += "\n" + req.body['1'].title + " por un precio de $" + req.body['1'].precio + " pesos por " + req.body['1'].cantidad + " unidades"   + "\n";
        cont+=Number(req.body['1'].precio);
    }
    if(req.body['2'] != null){
        console.log("buena pa");
        str += "\n" + req.body['2'].title + " por un precio de $" + req.body['2'].precio + " pesos por " + req.body['2'].cantidad + " unidades"  + "\n";
        cont+=Number(req.body['2'].precio);
    }
    if(req.body['3'] != null){
        console.log("buena pa");
        str +="\n" +  req.body['3'].title + " por un precio de $" + req.body['3'].precio + " pesos por " + req.body['3'].cantidad + " unidades"   + "\n";
        cont+=Number(req.body['3'].precio);
    }
    if(req.body['4'] != null){
        console.log("buena pa");
        str += "\n" + req.body['4'].title + " por un precio de $" + req.body['4'].precio + " pesos por " + req.body['4'].cantidad + " unidades"   +"\n";
        cont+=Number(req.body['4'].precio);
    }
    if(req.body['5'] != null){
        console.log("buena pa");
        str += "\n" + req.body['5'].title + " por un precio de $" + req.body['5'].precio + " pesos por " + req.body['5'].cantidad + " unidades"   +"\n";
        cont+=Number(req.body['5'].precio);
    }
    if(req.body['6'] != null){
        console.log("buena pa");
        str += "\n" + req.body['6'].title + " por un precio de $" + req.body['6'].precio + " pesos por " + req.body['6'].cantidad + " unidades"   +"\n";
        cont+=Number(req.body['6'].precio);
    }
    if(req.body['7'] != null){
        console.log("buena pa");
        str += "\n" + req.body['7'].title + " por un precio de $" + req.body['7'].precio + " pesos por " + req.body['7'].cantidad + " unidades"   +"\n";
        cont+=Number(req.body['7'].precio);
    }
    if(req.body['8'] != null){
        console.log("buena pa");
        str += "\n" + req.body['8'].title + " por un precio de $" + req.body['8'].precio + " pesos por " + req.body['8'].cantidad + " unidades"   +"\n";
        cont+=Number(req.body['8'].precio);
    }
    if(req.body['9'] != null){
        console.log("buena pa");
        str += "\n" + req.body['9'].title + " por un precio de $" + req.body['9'].precio + " pesos por " + req.body['9'].cantidad + " unidades"   +"\n";
        cont+=Number(req.body['9'].precio);
    }
    

    iva=cont*0.19;

    str += "\n\n" + "Con un impuesto de: $" + iva + " pesos";
    str += "\n\n" + "Con un cargo de envio de: $" + 40000 + " pesos";
    str += "\n\n" + "Dando un total de: $" + (cont+iva+ 40000) + " pesos";
    str += "\n\n" + "Se enviara a la dirección Carrera 9 No. 45A - 44";

    const doc = new jsPDF();
        doc.text(hoy.toDateString() + "\n\n"
                + "Tu factura es" + "\n\n" 
                + "Buen dia," + "\n\n"
                + "Se genero la factura por su compra realizada, usted acabo de adquirir:" + "\n"
                + str, 10, 10);

        doc.save("factura.pdf");

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'jorgecardi00@gmail.com', // generated ethereal user
          pass: 'hwrewswpxcmnpsdu', // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: ' "Factura de tu carrito de compras 👻" <jorgecardi00@hotmail.com>', // sender address
        to: "jorgecardi00@gmail.com", // list of receivers
        subject: "Hello, aqui esta tu factura ✔", // Subject line
        text: "Factura", // plain text body
        html: "<b>Buen dia, este esta es tu factura</b>", // html body
        attachments: [{
            filename: 'factura.pdf',
            path: 'D:/Mis documentos/Proyecto Desarrollo Web/Proyecto luisfe/Parcial II/factura.pdf',
            contentType: 'application/pdf'
          }],
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      str='';
      
});

module.exports = router;