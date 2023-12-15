import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponentComponent } from './items-list-component.component';

describe('ItemsListComponentComponent', () => {
  let component: ItemsListComponentComponent;
  let fixture: ComponentFixture<ItemsListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsListComponentComponent]
    });
    fixture = TestBed.createComponent(ItemsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
