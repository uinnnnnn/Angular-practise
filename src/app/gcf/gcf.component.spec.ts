import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcfComponent } from './gcf.component';

describe('GcfComponent', () => {
  let component: GcfComponent;
  let fixture: ComponentFixture<GcfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GcfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
