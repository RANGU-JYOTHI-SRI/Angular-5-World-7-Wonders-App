import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenWondersListComponent } from './seven-wonders-list.component';

describe('SevenWondersListComponent', () => {
  let component: SevenWondersListComponent;
  let fixture: ComponentFixture<SevenWondersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenWondersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenWondersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
