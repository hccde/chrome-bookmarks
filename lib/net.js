import setting  from '../setting'

export function ajax(query_str) {
	let script = document.createElement('script')
	let querystr = ''
	for(let key in query_str){
		querystr+=key+'='+query_str[key]+'&'
	}
	querystr = querystr.substr(0,querystr.length-1)
	script.src = setting.url+'?'+querystr
	document.getElementsByTagName('body')[0].appendChild(script)
}
