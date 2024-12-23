import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCodigoComponent } from './prueba-codigo.component';

describe('PruebaCodigoComponent', () => {
  let component: PruebaCodigoComponent;
  let fixture: ComponentFixture<PruebaCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruebaCodigoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
