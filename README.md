SampleWebApp
============

A sample app having bootstrap, jquery and  highcharts wired together on the client side. On the server side, it uses express and node js which accepts a POST-request and based returns a JSON which can then be handled by javascript on the client side

Feel free to download this package and use this as a template for any development


Steps to run the client:
- The client already has all the libraries (bootstrap, jquery and highcharts wired together)
- However, you will need to point the JS files to the particular location where the server is being run
- Once the javascript files are pointing to the correct location, launch index.html in your favourite web browser

Steps to run the Server: 
 1. Preequisites: Install node (and hence, npm)
 2. Checkout the code
 3. npm start
 (If any doubts around express, use http://expressjs.com/guide.html)

Note: While creating the server, the following commands were used but are not necessary after checking out the code:
 1. sudo npm install -g express-generator
 2. sudo npm install cors
 3. sudo npm install
