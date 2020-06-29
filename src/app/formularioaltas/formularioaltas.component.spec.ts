import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioaltasComponent } from './formularioaltas.component';

describe('FormularioaltasComponent', () => {
  let component: FormularioaltasComponent;
  let fixture: ComponentFixture<FormularioaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
