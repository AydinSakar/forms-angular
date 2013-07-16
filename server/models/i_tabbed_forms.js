var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ISchema = new Schema({
    surname: {type: String, required: true, list:{}, form:{pane:'first'}},
    forename:  {type: String, list:true, form:{pane:'first'}},
    address: {
        line1: {type: String, form:{label: 'Address',pane:'first'}},
        line2: {type: String, form:{label: null,pane:'first'}},
        line3: {type: String, form:{label: null,pane:'first'}},
        town: {type: String, form:{label: 'Town', pane:'first'}},
        postcode: {type: String, form:{label: 'Postcode',pane:'first'}}
    },
    weight: {type : Number, form:{label:"Weight (lbs)",pane:'second'}},
    dateOfBirth: {type:Date, form:{pane:'second'}},
    accepted: {type: Boolean, form:{pane:'second'}},
    interviewScore:{type:Number,form:{pane:'second'},list:{}},
    freeText: {type: String, form:{type: 'textarea', rows:5, pane:'second'}}
});

var I;
try {I = mongoose.model('I') } catch(e) {I = mongoose.model('I', ISchema)}

module.exports = I;
