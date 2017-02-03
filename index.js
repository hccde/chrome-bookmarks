import { ajax } from './lib/net'
import { MD5 } from './lib/md5'

let query_str = {
	q: 'test',
	appid: 'your appid',
	salt: 'random number',
	from: 'en',
	to: 'zh',
	sign: 'your sign',
	callback:'callback'
}
//compute
query_str.sign = ''

function callback(res){
	//response callback
}

ajax(query_str)