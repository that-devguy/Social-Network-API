# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
A social network API built for users to share their thoughts, rect to friends' thoughts, and create a friends list. This API was built using Express.js for routing, a MongoDB database, and the Mongoose ODM.
  
  
## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Project Links](#project-links)
- [License](#license)
- [Questions](#questions)

## Technologies Used

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://www.ecma-international.org/ecma-262/)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v5.0-green)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-v6.0.12-blue)](https://mongoosejs.com/)


## Installation

Please follow these steps to install and run the project on your local machine:

1. Install MongoDB
2. Clone the repository
3. Run the command `npm install` to install all the dependencies required for the back-end
4. Create a database and connect it to the [connection.js](/config/connection.js)
5. Start the application using `node index`
  
## Usage
  
To use this project, follow these steps:

Follow [Walkthrough Demo](https://drive.google.com/file/d/1aCfvLHiIA79vT39lXA3pgpdnKUo4VYxt/view?usp=sharing)

## Contributing

Contributions are not currently open on this project.

## Tests

To run tests on this project, follow these steps:

1. Install Insomnia on your local machine
2. Create http requests for the following:
    - GET routes for all users and all thoughts
    - GET routes for a single user and a single thought
    - POST, PUT, and DELETE routes for users and thoughts
    - POST AND DELETE routes for a user's friend list
    - POST AND DELETE routes for reactions to thoughts
    - **All api routes can be found in [/routes/api](./routes/api/)**
3. Test your routes (follow [Walkthrough Demo](https://drive.google.com/file/d/1aCfvLHiIA79vT39lXA3pgpdnKUo4VYxt/view?usp=sharing) if needed)


```json
// example data for users
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

```json
// example data for thoughts
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```
  
## Project Links
  
Walkthrough Demo: https://drive.google.com/file/d/1aCfvLHiIA79vT39lXA3pgpdnKUo4VYxt/view?usp=sharing

GitHub Repository: https://github.com/that-devguy/Social-Network-API

## License

This project is licensed under the MIT license. Feel free to edit and distribute this template as you like.

See [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) for more information.

## Questions

If you have any questions or issues, feel free to reach out to me via my GitHub profile: [that_devguy](https://github.com/that_devguy) or email me at zkmutch@gmail.com.
