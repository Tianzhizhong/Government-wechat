import { get, post } from './request'

export const GetUserLogin = p => post(`http://api.manager.sjxzhtc.com/user/login`, p);