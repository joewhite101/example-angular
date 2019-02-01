import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamServeComponent } from './stream-serve.component';

describe('StreamServeComponent', () => {
  let component: StreamServeComponent;
  let fixture: ComponentFixture<StreamServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
