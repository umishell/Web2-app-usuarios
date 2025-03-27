import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { InserirUsuarioComponent } from './inserir-usuario/inserir-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    ListarUsuarioComponent,
    InserirUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Adicione FormsModule aos imports
  ],
  exports: [
    ListarUsuarioComponent,
    InserirUsuarioComponent,
    EditarUsuarioComponent
  ],
  providers: [UsuarioService] // Forneça o serviço
})
export class UsuarioModule { }
