const mongoose = require('mongoose');
// require('dotenv').config();
mongoose.connect('mongodb://localhost/delrealgroup/');
// mongoose.connect('mongodb://TheDelRealGroup:'+ process.env.pass +'@ds245357.mlab.com:45357/thedelrealgroup')

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB has connected');
});

let registerSchema = ({
  fullName: String,
  phoneNumber: Number,
  agent: String,
  guests: Number,
});

let Register = mongoose.model('Register', registerSchema)

let invitesSchema = ({
  agent: String,
  name: String,
  email_phone: String,
  age: String,
  dateSent: String,
  dateViewed: String,
  rsvp: String,
  attend: {type: Boolean, default: false},
  guests: {type: Number, default: 0},
});

let Invites = mongoose.model('Invites', invitesSchema)

function save(e) {
  let obj = new Register({
    fullName: e.name,
    phoneNumber: e.phone,
    agent: e.agent,
    guests: e.guests,
  });
  obj.save()
}


let funcs = { Register, save, Invites }
module.exports = funcs;
