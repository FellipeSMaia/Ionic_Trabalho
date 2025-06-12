import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteCadastroComponent } from './cadastro.component';
import { ClienteCadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [ClienteCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClienteCadastroRoutingModule,
  ],
})
export class ClienteCadastroModule {}
