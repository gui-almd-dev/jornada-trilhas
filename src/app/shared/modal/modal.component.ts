import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/busca/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public formBuscaService: FormBuscaService){}

}
