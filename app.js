const mongoose = require('mongoose');

// Create fruitsDB and running on port 27017
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);



// const apple = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 7,
//     review: "Pretty solid as a fruit"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 7,
//     review: "Pretty solid as a fruit"
// });



// Fruit.insertMany([apple,orange,banana], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to fruitsDB");
//     }
// });

// Fruit.find((err, fruits) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fruits.forEach(fruit => {
//             mongoose.connection.close();
//             console.log(fruit.name);
//         });
//     }
// });

// fruit.save();





// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "John",
//     age: 37
// })

// person.save();


//______________________________________________

const findDocuments = function(db, callback) {

    // Get the documents collection
    const fruits = db.collection('fruits');
    
    // Find some documents
    fruits.find({}).toArray(function(err, fruits) {
        
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);

    });
}