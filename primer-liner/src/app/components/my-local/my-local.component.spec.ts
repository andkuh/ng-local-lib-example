import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLocalComponent } from './my-local.component';

describe('MyLocalComponent', () => {
  let component: MyLocalComponent;
  let fixture: ComponentFixture<MyLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
