/* 
Middleware works between request and response...
even express routing is a middleware...

express.static(root, [options])
This is a built-in middleware function in Express.It serves static files not dynamic and is 
based on serve-static.

A template engine enables you to use static template files in your application. 
At runtime, the template engine replaces variables in a template file with actual
values and transforms the template into an HTML file sent to the client. 
This approach makes it easier to design an HTML page.

Some popular template engines of Express are Pug, Mustache, hbs and EJS.-> see on npm website
The Express application generator uses Jade as its default, but it also supports several others.
=> Template Engine helps in creating | Dynamic websites |

-> For using handlebars we need view engine that is hbs in express...
->install hbs and make views folder
We should have views directory for this...

For setting view engine write below code in index/app .js main file->
app.set("view engine", "hbs"); -> hbs can be ejs or other...


#Partials->
It is like React reusable components that we just import and write in one word to use it anywhere...
e.g. Headers used in every menubar like gallery,about,home... so make file in partials like 
header.hbs and put code there and use it everywhere...
write {{>filename}} to use it after register... as done in index.hbs and index.js
This >filename way is for hbs ,other like pug have different ways for that...

Important->
Nodemon doesn't run for each change in .hbs file -> For that
write in terminal ->  nodemon index -e js,hbs
-e means extension and specifying js and hbs file for running on changes...


*/