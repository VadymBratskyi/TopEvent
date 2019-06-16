import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterErrorComponent } from './master-error.component';

describe('MasterErrorComponent', () => {
  let component: MasterErrorComponent;
  let fixture: ComponentFixture<MasterErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
