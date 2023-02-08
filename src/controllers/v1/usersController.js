const UserModel = require('../../models/userModel');

const getUser = (req, res) => {
    console.log(`Data: ${req.body["name"]}`);

    UserModel.name = req.body.name;
    UserModel.age = req.body.age;

    console.log('UM -> ' + JSON.stringify(UserModel));

    res.send({
        code: 2000,
        message: 'Success',
        data: [UserModel]
    })

    // let employee = new personModel(req.body);
    // if (employee !== null) {
    //     employee.save((err, personModel) => {
    //         if (err) {
    //             const errMessage = {
    //                 'message': 'Data not found.',
    //                 'error': err
    //             };
    //             res.send(errMessage);
    //         }
    //         res.json(employee);
    //     });
    // } else {
    //     res.send({
    //         message: 'New data is {}'
    //     });
    // }
};

module.exports = { getUser };