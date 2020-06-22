chat-nodejs
===========

An open source chat with node js. You just need to put the folder html on your web server

Explain html & js :
-------------------
just using socket.io file from node server file to conect the two webserver.

Explain nodejs :
----------------

It's just using some npm pakages :
 * http
 * MD5
 * socket.io


 Installation :
 --------------

 Stapes : 
  * enter in the folder of the repo
  * put files of html in a classic web server folder like apache2 wamp of ngix.
  * edit index.html and at the and of the file replace the line : `<script src="http://YOUR-SERVER.com/socket.io/socket.io.js"></script>` with your server ip.
  * do the same thing with the file js/client.js `var socket = io.connect('http://YOUR-SERVER.com:8080')` but keep the `:8080`
  * install nodejs [here](https://nodejs.org/en/download/) is help. if you have apt on GNU/Linux you can enter : `sudo apt-get install nodejs npm` 
  * enter in the node folder. 
  * finaly you can enter `node server`