import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacdoComponent } from './macdo.component';

describe('MacdoComponent', () => {
  let component: MacdoComponent;
  let fixture: ComponentFixture<MacdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
