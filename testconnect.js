const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liran123:liran123@devconnector-ziihc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });



try {
	
	client.connect();
	console.log('connection succeeded');
	
} catch (err) {
	
	console.error(err.message);
}