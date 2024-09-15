import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbannerComponent } from './starbanner.component';

describe('StarbannerComponent', () => {
  let component: StarbannerComponent;
  let fixture: ComponentFixture<StarbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarbannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
