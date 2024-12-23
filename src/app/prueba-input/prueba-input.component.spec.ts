import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaInputComponent } from './prueba-input.component';

describe('PruebaInputComponent', () => {
  let component: PruebaInputComponent;
  let fixture: ComponentFixture<PruebaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruebaInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
