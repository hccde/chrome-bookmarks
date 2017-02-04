import { Model } from './lib/Model.class'
let template = require('./template.html');

let m = new Model('stall')
m.bind(template)
// ajax(query_str)