import Mock from 'mockjs'  
import apiData from './data.json'
import classlist from "./classlist.json";
import commend from "./commend.json";
import goods from "./goods.json";
import brands from "./brands.json";

Mock.mock('/api/main', apiData);
Mock.mock('/api/classlist', classlist);
Mock.mock('/api/commend', commend);
Mock.mock('/api/goods', goods);
Mock.mock('/api/brands', brands);
