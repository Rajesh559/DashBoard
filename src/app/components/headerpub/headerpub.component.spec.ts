import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpubComponent } from './headerpub.component';

describe('HeaderpubComponent', () => {
  let component: HeaderpubComponent;
  let fixture: ComponentFixture<HeaderpubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
