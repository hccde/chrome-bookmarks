import { ajax } from './lib/net'
console.log(1)
query_str = {
		from: 'en',
		to: 'zh - CHS',
		text: 'equator'
}
ajax(query_str)