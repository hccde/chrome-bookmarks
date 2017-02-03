import setting  from '../setting'
console.log(setting)
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

//unused
function post_cross_domain(query_str,callback){
	let form = document.createElement('form');
	let iframe = document.createElement('iframe');

	iframe.id = 'targeted';
	iframe.name = 'targeted';
	iframe.style.width = '0px';
	document.getElementsByTagName('body')[0].appendChild(iframe);
	iframe.onload=function(){
		//get the content of iframe 
		callback()
	}

	form.action = setting.url;
	form.method = setting.method;
	form.target = 'targeted'



	Object.keys(query_str).forEach((function(e) {
		add_key_value(e, query_str[e], form);
	}))

	form.submit();
}

function add_key_value(key, value, form) {
	form.innerHTML = form.innerHTML + '<input name=' + key + ' value=' + value + '>';
}