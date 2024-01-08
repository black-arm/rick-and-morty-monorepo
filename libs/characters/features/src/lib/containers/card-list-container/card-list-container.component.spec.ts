import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListContainerComponent } from './card-list-container.component';
import {
    CharacterStore,
    CharactersHttpService,
} from '@rick-and-morty-monorepo/domain';
import { CharacterServiceMock } from '@rick-and-morty-monorepo/mocks';

describe('CardListContainerComponent', () => {
    let component: CardListContainerComponent;
    let fixture: ComponentFixture<CardListContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardListContainerComponent],
            providers: [
                CharacterStore,
                {
                    provide: CharactersHttpService,
                    useClass: CharacterServiceMock,
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CardListContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
