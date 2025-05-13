import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDefinitorsComponent } from './svg-definitors.component';

describe('SvgDefinitorsComponent', () => {
  let component: SvgDefinitorsComponent;
  let fixture: ComponentFixture<SvgDefinitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDefinitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDefinitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
