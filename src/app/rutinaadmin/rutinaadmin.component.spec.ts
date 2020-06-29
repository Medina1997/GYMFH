import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaadminComponent } from './rutinaadmin.component';

describe('RutinaadminComponent', () => {
  let component: RutinaadminComponent;
  let fixture: ComponentFixture<RutinaadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
