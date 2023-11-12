import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportHostComponent } from './viewport-host.component';

describe('ViewportHostComponent', () => {
  let component: ViewportHostComponent;
  let fixture: ComponentFixture<ViewportHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewportHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
