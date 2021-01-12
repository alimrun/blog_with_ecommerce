let express = require('express');
let app = new express;

const mongoose = require('mongoose');
(async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, function (error) {
            if (error) {
                console.log('db connection failed')
            } else {
                console.log('db connected');
            }
        });
    } catch (exception) {
        console.log('Error :' + exception);
    }
})();

let bodyParser = require('body-parser')
app.use(bodyParser.json());

/*routes*/
let api_routes = require('./Routes/api/v1/routes');
app.use('/api/v1/', api_routes);
/*routes*/

app.listen(8000)