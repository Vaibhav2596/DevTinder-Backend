- Create a repository
- Initialize the repository - npm init
- node_modules, package.json, package-lock.json - Difference betweeen them
- Install express
- Create a server
- Listen to port 7777
- Make request handlers for /test , /hello
- Install Nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)

## Routing and Request Handlers

- Initialize Git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, / ,  /hello/2, /xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE, API Calls and test them on Postman
- Explore routing and use of ?, +, (), * in the routes 
- Use of regex in routes /a/ , /.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route",rh1,rh2,rh3,rh4,rh5)
- What is a Middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- Difference between app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error Handling using app.use("/",(err,req,res,next) => {});

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install Mongoose Library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a user Schema  & user Model
- Create /signup API to add data to database
- Push some documents using API calls from postman
- Error Handling using try, catch

- Difference between JavaScript Object and JSON
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user