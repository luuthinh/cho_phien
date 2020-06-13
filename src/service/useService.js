import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { API_URL } from '../constants/API';

async function login(username, password) {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.1.100:8069/web/session/authenticate', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        params:{'db':'odoo_db','login':username,'password':password}
      })
    }).then(async(response) => { 
      console.log(response.headers.map["set-cookie"])
      console.log(typeof response.headers.map["set-cookie"])
      await AsyncStorage.setItem('sessionID', response.headers.map["set-cookie"])
      let json = await response.json()
      json.result.session_id = response.headers.map["set-cookie"]
      return json
    })
    .then(async(json) => {
        console.log("chuoi nhan ve")
        await AsyncStorage.setItem('uid', json.result.uid.toString())
        resolve(json)
    }).catch(err => reject(err));
  });
}

async function logout(getState) {
  return new Promise(async (resolve, reject) => {
    const currentState = await getState();
    const { token } = currentState.auth;
    axios.post(`${API_URL}/user/logout`, {}, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      resolve(response);
    //   await AsyncStorage.removeItem('userData');
    //   await AsyncStorage.removeItem('userToken');
    }).catch(err => reject(err));
  });
}

export const userService = {
  login,
  logout,
};