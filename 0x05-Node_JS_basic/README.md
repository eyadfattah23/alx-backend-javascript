# 0x05. NodeJS Basics 
## Learning Objectives


* run javascript using NodeJS
* use NodeJS modules
* use specific Node JS module to read files
* use `process` to access command line arguments and the environment
* create a small HTTP server using Node JS
* create a small HTTP server using Express JS
* create advanced routes with Express JS
* use ES6 with Node JS with Babel-node
* use Nodemon to develop faster


## Requirements

* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
* All files should end with a new line
* A `README.md` file, at the root of the folder of the project.
* code should use the `js` extension
* code will be tested using `Jest` and the command `npm run test`
* code will be verified against lint using ESLint
* code needs to pass all the tests and lint. Verify the entire project running `npm run full-test`
* All of functions/classes must be exported by using this format: `module.exports = myFunction;`


## Resources:
* [Using nodemon with NodeJS Servers](https://www.youtube.com/watch?v=kV6MJ9W4whM)
* [nodemon documentation](https://github.com/remy/nodemon#nodemon)
* [Node.js and Express.js](https://www.youtube.com/watch?v=Oe421EPjeBE)
* [expressjs documentation](https://expressjs.com/en/starter/hello-world.html)
* [process built-in modules documentation](https://node.readthedocs.io/en/latest/api/process/)

### Notes:
1. run nodemon using `npx nodemon ./filename.js` 


## Final Task:

8. Organize a complex HTTP server using Express

Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named `full_server`.

### 8.1 Organize the structure of the server

* Create 2 directories within:
  * `controllers`
  * `routes`
* Create a file `full_server/utils.js`, in the file create a function named `readDatabase` that accepts a file path as argument:
  * It should read the database asynchronously
  * It should return a promise
  * When the file is not accessible, it should reject the promise with the error
  * When the file can be read, it should return an object of arrays of the firstname of students per fields

#### 8.2 Write the App controller

Inside the file ``full_server/controllers/AppController.js``:

* Create a class named `AppController`. Add a static method named `getHomepage`
* The method accepts `request` and `response` as argument. It returns a 200 status and the message `Hello Holberton School!`

#### 8.3 Write the Students controller

Inside the file `full_server/controllers/StudentsController.js`, create a class named `StudentsController`. Add two static methods:

The first one is `getAllStudents`:

* The method accepts `request` and `response` as argument
* It should return a status 200
* It calls the function `readDatabase` from the utils file, and display in the page:
  * First line: This is the list of our students
  * And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
* If the database is not available, it should return a status 500 and the error message `Cannot load the database`

The second one is `getAllStudentsByMajor`:

* The method accepts `request` and `response` as argument
* It should return a status 200
* It uses a parameter that the user can pass to the browser `major`. The `major` can only be `CS` or `SWE`. If the user is passing another parameter, the server should return a 500 and the error `Major parameter must be CS or SWE`
* It calls the function `readDatabase` from the `utils` file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field `List: LIST_OF_FIRSTNAMES_IN_THE_FIELD`
* If the database is not available, it should return a status 500 and the error message `Cannot load the database`

#### 8.4 Write the routes

Inside the file `full_server/routes/index.js`:

* Link the route `/` to the `AppController`
* Link the route `/students` and `/students/:major` to the `StudentsController`

#### 8.5 Write the server reusing everything you created

Inside the file named `full_server/server.js`, create a small Express server:

* It should use the routes defined in `full_server/routes/index.js`
* It should use the port `1245`

#### 8.6 Update package.json (if you are running it from outside the folder full_server)

If you are starting node from outside of the folder `full_server`, you will have to update the command `dev by: nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv`

**Warning**:

* The database filename is passed as argument of the `server.js` BUT, for testing purpose, you should retrieve this filename at the execution (when `getAllStudents` or `getAllStudentsByMajor` are called for example)

In terminal 1:
```
bob@dylan:~$ npm run dev
...
```
In terminal 2:
```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE && echo ""
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv && echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
> GET /students/SWES HTTP/1.1
> Host: localhost:1245
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 500 Internal Server Error
< X-Powered-By: Express
< Date: Mon, 06 Jul 2020 03:29:00 GMT
< Connection: keep-alive
< Content-Length: 33
<
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
```
