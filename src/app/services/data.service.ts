import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url + '/posts');
  }

  getById(id) {
    return this.http.get(this.url + `/posts/${id}`);
  }

  createPost(data) {
    return this.http.post(`${this.url}/posts`, JSON.stringify(data),
      {headers: {'Content-Type': 'application/json'}});
  }
}

