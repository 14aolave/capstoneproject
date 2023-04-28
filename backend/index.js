const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const app = express();
const url = `mongodb://localhost:27020/local`;
const port = 3030;

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));

app.use(express.json());
app.get('/blogs', function(req, res) {
    const mockBlogData = [
        {
          id: 1,
          title: "My first blog",
          content: "This is my first blog post be anytthing asdf",
          imageUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
        },
        {
          id: 2,
          title: "My second blog",
          content: "This is my second blog post",
          imageUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
        },
        {
          id: 3,
          title: "My third blog",
          content: "This is my third blog post",
          imageUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
        }
      ]
      res.send(mockBlogData);
  });

// app.post('/blogs', function(req, res) {
//     // Pulling data from the request body
//     const blogData = req.body;
//   // connecting to Mongo Client (in our case localhost)
//   console.log("hi hi")
//     MongoClient.connect(url, function(err, db) {
//       console.log('Connected to MongoDB')
//       // throw error if it doesn't connect
//       if (err) throw err;
//       // grab the collection
//       const collection = db.collection('blogs');
//       console.log('Connected to collection', collection)
//       // insert the data into the collection
//       collection.insertOne(blogData, function(err, result) {
//         if (err) throw err;
//         res.send(result.ops[0]);
//         db.close();
//       });
  
//     });
//   });

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
  });