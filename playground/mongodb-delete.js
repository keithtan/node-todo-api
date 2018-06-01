//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Andrew', age: 25};
var {name} = user;
console.log(name);
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Keith'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b0fb67979ed1715748545a8')}).then((result) => {
        console.log(result);
    });

    //db.close();
});