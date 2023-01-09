import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleImgComponent } from './example-img.component';

describe('ExampleImgComponent', () => {
  let component: ExampleImgComponent;
  let fixture: ComponentFixture<ExampleImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
