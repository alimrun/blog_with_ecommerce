let Admin = require('../../../../Model/admin');
let bcrypt = require('bcrypt');

exports.register = async function (request, response) {

    let admin = new Admin({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        image: 'def.png',
        password: bcrypt.hashSync(request.body.password, 10)
    });

    try {
        await admin.save();
        response.send('admin registration is success!');
    } catch (e) {
        response.send(e);
    }
};