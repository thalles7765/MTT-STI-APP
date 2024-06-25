import { environment } from '@@environment/environment';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  async getData() {
    return await axios
      .get(`${environment.url_ecommerce}/customers`, { headers: { Authorization: 'Basic Y2tfN2YwYWE0OTc4YjFlMDM2NmE0NmQxNjI3MWZlMjc1M2UwMDcyYzMxNzpjc18xYmVhZjNkMGE4MGU0YzY3NjQ1OTBhY2Y1NDU5OGEzNmM5OGM2OGUy' } })
      .then((data: any) => {
        console.log('## CLIENTS RESULT ##')
        console.log(data)
        return data
      });
  }
}
