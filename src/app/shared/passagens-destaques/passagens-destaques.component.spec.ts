import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagensDestaquesComponent } from './passagens-destaques.component';

describe('PassagensDestaquesComponent', () => {
  let component: PassagensDestaquesComponent;
  let fixture: ComponentFixture<PassagensDestaquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassagensDestaquesComponent]
    });
    fixture = TestBed.createComponent(PassagensDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
