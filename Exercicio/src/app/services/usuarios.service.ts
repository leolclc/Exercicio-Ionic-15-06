import { Injectable } from '@angular/core';
// import { Http} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { Usuario, Usuarios} from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  //users: Usuario[];

  constructor( private http: HttpClient) { 


 }
    async getUsers() {
      let users = await this.http.get<Usuarios>("../../assets/alunos.json").toPromise();
      return users;
    }

}
