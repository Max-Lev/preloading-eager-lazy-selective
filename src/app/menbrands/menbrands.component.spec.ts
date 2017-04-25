import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenbrandsComponent } from './menbrands.component';

describe('MenbrandsComponent', () => {
  let component: MenbrandsComponent;
  let fixture: ComponentFixture<MenbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
