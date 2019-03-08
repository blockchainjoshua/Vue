    
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String,
        Required: 'Please enter'
    },
    last_name: {
        type: String,
        Required: 'Please enter'
    },
        email: {
        type: String,
        Required: 'Please enter'
    },
        age: {
        type: String,
        Required: 'Please enter'
    },
    Created_date:{
        type: Date,
        default :Date.now

    },

});
module.exports = mongoose.model('Users', UserSchema);