import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiloComponent } from './milo.component';

describe('MiloComponent', () => {
  let component: MiloComponent;
  let fixture: ComponentFixture<MiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
