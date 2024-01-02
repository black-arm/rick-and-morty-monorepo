import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListContainerComponent } from './card-list-container.component';

describe('CardListContainerComponent', () => {
  let component: CardListContainerComponent;
  let fixture: ComponentFixture<CardListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
