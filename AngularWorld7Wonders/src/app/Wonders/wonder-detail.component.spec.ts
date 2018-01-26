import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderDetailComponent } from './wonder-detail.component';

describe('WonderDetailComponent', () => {
  let component: WonderDetailComponent;
  let fixture: ComponentFixture<WonderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
