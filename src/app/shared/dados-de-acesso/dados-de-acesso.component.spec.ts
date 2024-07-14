import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDeAcessoComponent } from './dados-de-acesso.component';

describe('DadosDeAcessoComponent', () => {
  let component: DadosDeAcessoComponent;
  let fixture: ComponentFixture<DadosDeAcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosDeAcessoComponent]
    });
    fixture = TestBed.createComponent(DadosDeAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
