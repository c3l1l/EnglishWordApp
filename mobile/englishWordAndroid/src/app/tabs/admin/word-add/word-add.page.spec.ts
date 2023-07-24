import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordAddPage } from './word-add.page';

describe('WordAddPage', () => {
  let component: WordAddPage;
  let fixture: ComponentFixture<WordAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WordAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
