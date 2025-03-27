import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: string[] = [];

  getUsuarios(): string[] {
    return this.usuarios;
  }

  adicionarUsuario(nome: string): void {
    this.usuarios.push(nome);
  }

  editarUsuario(index: number, novoNome: string): void {
    if (index >= 0 && index < this.usuarios.length) {
      this.usuarios[index] = novoNome;
    }
  }
}
