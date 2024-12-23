import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiloComponent } from './milo.component';
import { MatCard, MatCardHeader, MatCardModule } from '@angular/material/card';

describe('MiloComponent', () => {
  let component: MiloComponent;
  let fixture: ComponentFixture<MiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiloComponent],
      imports: [MatCardModule]
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
