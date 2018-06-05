const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: ''}).then((todo) => {

// });

Todo.findByIdAndRemove('5b15fb046e8cc408aac9e039').then((todo) => {
    console.log(todo);
});