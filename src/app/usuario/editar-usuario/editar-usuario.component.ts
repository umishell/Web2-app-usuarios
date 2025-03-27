import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-editar-usuario',
  standalone: false,
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  buscarUsuario: string = '';
  novoNome: string = '';
  indexUsuario: number = -1;

  constructor(private usuarioService: UsuarioService) { }

  buscar(): void {
    this.indexUsuario = this.usuarioService.getUsuarios().indexOf(this.buscarUsuario);
    if (this.indexUsuario !== -1) {
      this.novoNome = this.buscarUsuario;
    } else {
      this.novoNome = '';
    }
  }

  editar(): void {
    if (this.indexUsuario !== -1 && this.novoNome) {
      this.usuarioService.editarUsuario(this.indexUsuario, this.novoNome);
      this.buscarUsuario = '';
      this.novoNome = '';
      this.indexUsuario = -1;
    }
  }
}
