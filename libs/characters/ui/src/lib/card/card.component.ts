import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gender, Status, Location } from '@rick-and-morty-monorepo/characters-util';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input()
  src: string = '';

  @Input()
  title: string = '';

  @Input()
  status: Status = 'unknown';

  @Input()
  gender: Gender = 'unknown';

  @Input()
  species: string = '';

  @Input()
  location: Location | undefined;
}
