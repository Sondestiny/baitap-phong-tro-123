import express from 'express'; // load express vào ứng dụng
import bodyParser from 'body-parser';
import cors from 'cors';
import rootRouter from './routers/index.js';
import testConnectDB from './config/connectDB.js';
const app = express(); // định nghĩa đối tượng app, là một ứng dụng express.
import formatPriceToNumber from './ultis/formatPriceToNumber'
import formatArea from './ultis/formatAreaToNumber'
import {dataPrices, dataAreas} from './ultis/data'
// Tuỳ chỉnh cho app, ta sẽ thêm body-parser và cors cho app
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
// setup port của app
var port = process.env.PORT || 5000;

testConnectDB();
// phải gắn router với app 
app.use('/api/v1', rootRouter); //gắn router xử lí khi người dùng GET địa chỉ localhost:5000/api/v1

app.get('/', function(req, res){
	res.send("<h2>This is my first app</h2>");
})

// Chạy server
app.listen(port, () => {
    console.log(`server is start at http://localhost:${port}/`);
})