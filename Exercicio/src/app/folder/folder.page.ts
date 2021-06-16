import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosPage } from '../usuarios/usuarios.page';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder: string;

usuariosPage: UsuariosPage;

  constructor(private route: Router, private activatedRoute: ActivatedRoute)  { }
 


  go() {
    this.route.navigate(['/alunos']);
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
