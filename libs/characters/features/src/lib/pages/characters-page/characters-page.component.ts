import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListContainerComponent } from '../../containers/card-list-container/card-list-container.component';

@Component({
    selector: 'rick-and-morty-monorepo-characters-page',
    standalone: true,
    imports: [CommonModule, CardListContainerComponent],
    templateUrl: './characters-page.component.html',
    styleUrl: './characters-page.component.scss',
})
export class CharactersPageComponent {}
