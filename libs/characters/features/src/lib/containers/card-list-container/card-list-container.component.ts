import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CharacterStore, CharactersHttpService } from '@rick-and-morty-monorepo/domain';
import { CardListComponent } from '@rick-and-morty-monorepo/characters-ui';


@Component({
  selector: 'rick-and-morty-monorepo-card-list-container',
  standalone: true,
  imports: [ CardListComponent ],
  providers: [ CharacterStore, CharactersHttpService ],
  templateUrl: './card-list-container.component.html',
  styleUrl: './card-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListContainerComponent implements OnInit {

  readonly store = inject(CharacterStore);

  ngOnInit(): void {
    this.store.charactersRequest({})
  }

}
