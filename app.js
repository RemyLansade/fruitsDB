const mongoose = require('mongoose');

// Create fruitsDB and running on port 27017
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
})

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