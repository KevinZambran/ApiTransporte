var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
const url = 'mongodb://127.0.0.1:27017/';

mongoose.connect(url + 'transporte', {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log('Conectada...');

    app.listen(port, () =>{
        console.log('Conexion correcta');
        
    });
    
})
.catch(err=> console.log(err));
