import { AsyncStorage } from "react-native";

export default class Api {

  constructor(domain) {

    this.domain = process.env.API_URL;
  }

  async getToken() {
    try {
      return await AsyncStorage.getItem('api_token') || '';
    } catch (error) {
      return null;
    }
  }

  async clearToken() {
    return await AsyncStorage.setItem('api_token', '');
  }

  async create(route, data) {
    return await this.send(this.domain + route, 'POST', data);
  }

  async get(route) {
    return await this.send(this.domain + route, 'GET');
  }

  async index(route) {
    return await this.send(this.domain + route, 'GET');
  }

  async show(route, id) {
    return await this.send(this.domain + route + `/${id}`, 'GET');
  }

  async send(url, method, data = {}) {
    try {

      const token = await this.getToken();

      const params = {
        method,
        headers: {
          "Authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }

      if (method === 'POST' || method === 'PUT') {
        params['body'] = JSON.stringify(data);
      }

      const res = await fetch(url, params);
      const json = await res.json();

      return { json, res };

    } catch(err) {
      return {
        json: { error: 'Network Error' },
        res: { status: 500 }
      };
    }
  }

}
