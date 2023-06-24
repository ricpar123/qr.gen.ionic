import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/clientes';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  qrData = '';
  createdCode = '';
  codeSplit = '';
  clientes :Cliente []=  [];
  cli = '';
  

  constructor( private qrDatos: DatosService) {}

  ngOnInit(): void {
    this.qrDatos.getClientes().subscribe( resp => {
      this.clientes = resp['listaClientes'];
      console.log('clientes: ', this.clientes);
    });
      
  }

  createCode(){
    this.createdCode = this.cli + '\n' + this.qrData;
    console.log(this.createdCode);
    
  }


}
