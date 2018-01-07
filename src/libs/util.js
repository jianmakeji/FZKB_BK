import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : '服装设计师看板数据管理系统';
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

util.threeJsUrl = "http://localhost:8080/fzkb/";

export default util;
