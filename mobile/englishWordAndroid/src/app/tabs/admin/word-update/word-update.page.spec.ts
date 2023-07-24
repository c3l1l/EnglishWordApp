import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordUpdatePage } from './word-update.page';

describe('WordUpdatePage', () => {
  let component: WordUpdatePage;
  let fixture: ComponentFixture<WordUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WordUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
