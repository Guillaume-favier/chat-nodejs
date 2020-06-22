let http = require('http')
let md5 = require('MD5')
var count = 0
var temp = []
console.log("ok let's go !")

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

httpServer = http.createServer(function(req, res){
	res.end('waw')
})

httpServer.listen(8080)
let io = require('socket.io').listen(httpServer)
var users = {}
io.sockets.on('connection', function(socket){
	var me = false;
	console.log("test")
	

	socket.on('newmsg', function(mess){
		if (!(me === false)) {
			if (mess.message === "rs") {
				temp = 0
				temp = []
				io.sockets.emit('rs')
			}else{
				mess.user = me;
				var date = new Date();
				mess.h = date.getHours()
				mess.m = date.getMinutes()
				temp[temp.length] = '<div class="info">[<strong>'+me.username+'</strong>] ['+mess.h+':'+mess.m+'] : '+mess.message+'</div>'
				io.sockets.emit('newmsg', mess)
				console.log(temp)
			}
		}
		
	})



	socket.on('login', function(user){
		
		count += 1;
		me = user
		me.id = user.mail.replace('@', '-').replace('.', '-')
		me.count = count
		temp[temp.length] = "** new user in the room : "+me.username+" **<br>"
		temp[temp.length] = "** there is "+me.count+" person in the room **<br>"
		users[me.id] = me;
		io.sockets.emit('newuser', me)
		socket.emit('logged', temp)
	})
	socket.on('disconnect', function(){
		if (!me){
			return false;
		}
		count -= 1;
		me.count = count
		temp[temp.length] = "** new user in the room : "+me.username+" **<br>"
		temp[temp.length] = "** there is "+me.count+" person in the room **<br>"
		io.sockets.emit('dissuser', me)
		delete users[me.id]
		
	})
})
