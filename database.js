const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://soliditconsultoria:aR8RpV6uLo9bTeTY@cluster0.ylgo0uo.mongodb.net/datos?retryWrites=true&w=majority&appName=Cluster0')
.then(db=>console.log("Conectado a mongo atlas"))
.catch(err=>console.error(err))
