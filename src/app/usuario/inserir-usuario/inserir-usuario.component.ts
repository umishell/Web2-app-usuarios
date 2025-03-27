import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-inserir-usuario',
  standalone: false,
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css']
})
export class InserirUsuarioComponent {
  novoUsuario: string = '';

  constructor(private usuarioService: UsuarioService) { }

  adicionarUsuario(): void {
    if (this.novoUsuario) {
      this.usuarioService.adicionarUsuario(this.novoUsuario);
      this.novoUsuario = '';
    }
  }
}
