# chat-nodejs
an open source chat with node js

Explain html & js :
-------------------
just using socket.io file from node server file to conect the two webserver.

 Installation html & js:
  -----------------------

 Stapes : 
  * enter in the folder of the repo
  * put files of html in a classic web server folder like apache2 wamp of ngix.
  * edit index.html and at the and of the file replace the line : `<script src="http://YOUR-SERVER.com/socket.io/socket.io.js"></script>` with your server ip.
  * do the same thing with the file js/client.js `var socket = io.connect('http://YOUR-SERVER.com:8080')` but keep the `:8080`
