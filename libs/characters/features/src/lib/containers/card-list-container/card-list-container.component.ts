import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { CharacterStore } from '@rick-and-morty-monorepo/domain';
import { CardListComponent } from '@rick-and-morty-monorepo/characters-ui';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'rick-and-morty-monorepo-card-list-container',
    standalone: true,
    imports: [CardListComponent, CommonModule],
    providers: [],
    templateUrl: './card-list-container.component.html',
    styleUrl: './card-list-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListContainerComponent implements OnInit {
    readonly store = inject(CharacterStore);

    ngOnInit(): void {
        this.store.charactersRequest({});
    }

    changePage(page: number) {
        this.store.charactersRequest({ page: page });
    }
}
