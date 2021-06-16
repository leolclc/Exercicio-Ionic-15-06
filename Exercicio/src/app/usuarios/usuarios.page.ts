import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuarios } from '../models/usuario.model';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

    users: Usuarios;
  constructor(public usuariosService: UsuariosService) { }

  async ngOnInit() {
     let users = await this.usuariosService.getUsers();
    this.users = users;
    console.log(users);
  }

}
