import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSecComponent } from './list-sec.component';

describe('ListSecComponent', () => {
  let component: ListSecComponent;
  let fixture: ComponentFixture<ListSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSecComponent]
    });
    fixture = TestBed.createComponent(ListSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
