/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {

  @Input() tipoCliente = '';
  @Input() descricao = '';

  value = 0;
  onChange = (val: number) => {};
  onTouch = () => {};

  writeValue(obj: any): void {
    this.value = obj;  
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  decrementar(){
    if(this.value>0){
      this.value -= 1; 
      this.onChange(this.value);
      this.onTouch();
    }
  }
  incrementar(){
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

}
