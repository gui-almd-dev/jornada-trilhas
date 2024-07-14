import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosBuscaComponent } from './filtros-busca.component';

describe('FiltrosBuscaComponent', () => {
  let component: FiltrosBuscaComponent;
  let fixture: ComponentFixture<FiltrosBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosBuscaComponent]
    });
    fixture = TestBed.createComponent(FiltrosBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
