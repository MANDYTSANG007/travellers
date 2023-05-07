# MERN Stack Travellers App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

This is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) for travellers to share their travel experiences with others. The app provides a platform for travellers to post their travel stories with images, tags, and locations. Users sign up and log in to the app using their Google account or create a new account. They can create and publish posts about their trips and like on other users' posts, and edit or delete their own posts.


## Table of Contents

- [Features](#features)
- [Technologies](#technologies-used)
- [Preview](#preview)
- [Installation](#installation)
- [Future Development](#future-development)
- [License](#license)


## Features

- Users can sign up and log in to the app using their Google account via Google OAuth.
- Users can create, edit, and delete their travel posts with images.
- Users can like a post.
- The app uses JSON Web Token for secure authentication and Bcrypt for password hashing.
- The app is responsive and works well on both desktop and mobile devices.


## Technologies Used

- React
- Redux
- Material-UI
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Google OAuth
- Bcrypt
- JSON Web Token


## Preview

Here is a screenshot of the app's landing page:
<img src="assets/images/travellers-landing-page.png">

Here is a GIF to showcase creating a post:
![Alt Text](assets/images/create-post.gif)

Here is a GIF to showcase deleting a post:
![Alt Text](assets/images/delete-post.gif)

Here is a GIF to showcase liking a post:
![Alt Text](assets/images/like-post.gif)


## Installation

1. Clone this repository to your local machine using git clone.

2. Install the dependencies by running npm install.

3. Create a .env file in the root directory and set the following environment variables:
```
MONGO_URI=<your-mongodb-uri>
GOOGLE_CLIENT_ID=<your-google-client-id>
JWT_SECRET=<your-jwt-secret>
```

4. Run the app by running `npm start` in the root directory.


## Future Development

Here are some potential features and improvements that could be implemented in the future:
- Add comments: Allow users to comment on each other's posts.
- Search functionality: Allow users to search for specific posts or other users within the app.
- Social media integration: Allow users to connect their social media accounts and share their posts on other platforms.


## Author

Mandy Tsang's custom logo and app design, with full-stack development. For more projects, go to [Mandy's website](https://mandytsang.com).


## License

This project is licensed under the MIT License - see [MIT](https://opensource.org/licenses/MIT)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

