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

// Fruit.updateOne({_id: "5ee1518300879f2c182be3e0"},{name: "Melon"}, function(err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close();
//         console.log('The selected item is succesfully update');
//     }
// });

// Fruit.deleteOne({_id: "5ee1518300879f2c182be3e0"}, function(err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close();
//         console.log('The selected item is succesfully delete)à');
//     }
// });

// fruit.save();



// ----------RELATIONSHIP-----------//

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 10,
    review: "Best fruit ever"
});

pineapple.save();

const amy = new Person({
    name: "Amy",
    age: 14,
    favouriteFruit: pineapple
});

amy.save();