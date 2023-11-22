const mongoose = require('mongoose');
const URI = 'mongodb://mongo2:27018/proyecto-final';
//const URI = 'mongodb+srv://rochadgps:DeTksWUEYf5V18Rt@cluster0.od6xiua.mongodb.net/';
//const URI = 'mongodb://localhost/proyecto-final';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;