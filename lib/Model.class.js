import { ajax } from './net'
import { MD5 } from './md5'
//your account info
import account from '../account'
const appid = account.appid
const password = account.password

export class Model {
	constructor(_word, _from = 'en', _to = 'zh') {
		this.from = _from;
		this.to = _to;
		this.salt = Math.floor(Math.random() * 100);
		this.__word = _word;
	}
	set __word(w) {
		this.word = w;
		this.sign = MD5(appid + w + this.salt + password)
	}

	bind(view) {
		let isOk = this.word.trim() && this.salt && this.sign && this.from && this.to;
		let callback = 'callback_' + new Date().getTime();
		window[callback] = function(res){//jsonp
			let body = document.getElementsByTagName('body')[0];
			let wraper = document.createElement('div');
			let content = ''

			wraper.innerHTML =  view+content+'</ul></div>';
			body.insertBefore(wraper,body.childNodes[0]);
		}
		if (isOk) {
			//ajxa request
			//resigter callback
			let query_str = {
				q: this.word,
				appid: appid,
				salt: this.salt,
				from: this.from,
				to: this.to,
				sign: this.sign,
				callback: callback
			}
			ajax(query_str)
		}
	}
}