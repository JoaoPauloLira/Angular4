import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloLoginComponent } from './modulo-login.component';

describe('ModuloLoginComponent', () => {
  let component: ModuloLoginComponent;
  let fixture: ComponentFixture<ModuloLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
