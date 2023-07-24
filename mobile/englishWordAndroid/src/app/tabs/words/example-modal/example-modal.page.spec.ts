import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleModalPage } from './example-modal.page';

describe('ExampleModalPage', () => {
  let component: ExampleModalPage;
  let fixture: ComponentFixture<ExampleModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExampleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
