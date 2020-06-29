import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinausuarioComponent } from './rutinausuario.component';

describe('RutinausuarioComponent', () => {
  let component: RutinausuarioComponent;
  let fixture: ComponentFixture<RutinausuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinausuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
