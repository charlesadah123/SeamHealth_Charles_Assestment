import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSecComponent } from './title-sec.component';

describe('TitleSecComponent', () => {
  let component: TitleSecComponent;
  let fixture: ComponentFixture<TitleSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleSecComponent]
    });
    fixture = TestBed.createComponent(TitleSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
