import { FormBuscaService } from 'src/app/busca/form-busca.service';
import { Component, Input, OnInit } from '@angular/core';
import { Estado } from 'src/app/core/types/types';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PromocaoService } from 'src/app/home/promocao.service';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.css']
})
export class DropdownUfComponent implements OnInit {

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() matPrefix!: string;
  @Input() control!: FormControl;

  filteredOptions$?: Observable<Estado[]>;

  estados: Estado[] = [];



  constructor (private promocaoService: PromocaoService,
    private formBuscaService: FormBuscaService
  ){

  }

  ngOnInit(): void {
    this.promocaoService.listarEstados().subscribe(dados => {
      this.estados = dados;
      console.log(this.estados);
    });
    
    
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    
  }


 _filter(value: string | Estado): Estado[] {
    const nomeUF = typeof value === 'string' ? value : value?.nome;
    const filterValue = nomeUF?.toLowerCase();
    const result = this.estados.filter(option => option.nome.toLowerCase().includes(filterValue));
    return result;
  }

  displayFn(estado: Estado): string {
    return estado && estado.nome ? estado.nome : '';
  }
}

