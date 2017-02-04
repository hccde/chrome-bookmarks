import { ajax } from './lib/net'
import { MD5 } from './lib/md5'
//your account info
import account from './account'
let template = require('./template.html');
console.log(template);

let query_word = 'test';
let query_str = {
	q: query_word,
	appid: account.appid,
	salt: Math.floor(Math.random()*100),
	from: 'en',
	to: 'zh',
	sign: 'your sign',
	callback:'callback'
};
//compute
query_str.sign = MD5(account.appid+query_word+query_str.salt+account.password);

window.callback = function(res){
	//response callback
	console.log(res);
}

// ajax(query_str)