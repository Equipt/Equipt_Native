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

  async create(route, data, options) {
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

  async update(route, data) {
    return await this.send(this.domain + route, 'PUT', data);
  }

  async send(url, method, data = {}) {
    try {

      const token = await this.getToken();

      const params = {
        method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }

      if (token) {
        params.headers["Authorization"] = `Bearer ${token}`;
      }

      if (method === 'POST' || method === 'PUT') {
        params['body'] = JSON.stringify(data);
      }

      const res = await fetch(url, params);

      const json = await res.json();

      return { json, res };

    } catch(err) {

      // AsyncStorage.clear();

      return {
        json: { error: 'Network Error' },
        res: { status: 500 }
      };
    }
  }

}
