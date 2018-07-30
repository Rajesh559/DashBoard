import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpriComponent } from './headerpri.component';

describe('HeaderpriComponent', () => {
  let component: HeaderpriComponent;
  let fixture: ComponentFixture<HeaderpriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
