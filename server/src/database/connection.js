const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://araujs:araujs@cluster0.jnneb.mongodb.net/desafioLoopis?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});