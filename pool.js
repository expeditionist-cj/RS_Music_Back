//引入mysql模块
const mysql=require('mysql');
var pool=mysql.createPool({
	host:'w.rdc.sae.sina.com.cn',
	port:3306,
	user:'34z2lzn0m4',
	password:'yhxxli35m4w2wxyikz03li20wih2z42m25hw30hw',
	database:'app_rsmusic',
	connectionLimit:20
});
module.exports=pool;

