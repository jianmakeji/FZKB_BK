import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    '/api' :
    env === 'production' ?
    '/api' :
    '/api';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    withCredentials:true,
    timeout: 30000
});
export default util;
