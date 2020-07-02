import axios from 'axios'

export default class myService {

    _apiBase = '/api/item';

    getItems = async () => {
            //resolve(this.data)
            const data = await axios.get('/api/items')
            return data
    }
    getAItems = async () => {
      //resolve(this.data)
      const data = await axios.get('/api/admin')
      return data
}
    getResource = async (url) => {
        const res = await axios.get(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
      };

      _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      };

      _transformPerson = (item) => {
        return {
          name: item.name
        }
      }
      getItem = async (id) => {
        //resolve(this.data)
        
        const item = await this.getResource(`/5eddf5b3f44278fa50a37af2`);
        //const data = await axios.get(`/api/items/${id}`)
        console.log(item)
        return item;
}
    }
    
