import Mock from 'mockjs'  
import apiData from './data.json'
import classlist from "./classlist.json";

Mock.mock('/api/main', apiData);
Mock.mock('/api/classlist', classlist);
