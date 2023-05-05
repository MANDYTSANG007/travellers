import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/api/client_id', (req, res) => {
    const clientId = process.env.CLIENT_ID;
    // res.json({ clientId });

    res.json({ clientId: clientId });
    // res.json(response.data.clientId)
});

// app.get('/', (req, res) => {
//     res.json('hi');
// })

// Set up Mongoose to connect mongoDB Atlas cloud database https://www.mongodb.com/cloud/atlas
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log( `Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import postRoutes from './routes/posts.js'
// import userRoutes from './routes/users.js'

// const app = express();
// dotenv.config();

// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
// app.use(cors());

// app.use('/posts', postRoutes);
// app.use('/user', userRoutes);

// app.get('/api/client_id', (req, res) => {
//     const clientId = process.env.CLIENT_ID;

//     res.json({ clientId: clientId });
// });

// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log( `Server is running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));
