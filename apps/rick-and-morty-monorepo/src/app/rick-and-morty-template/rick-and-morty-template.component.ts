import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent  } from '@rick-and-morty-monorepo/shared-ui';
@Component({
    selector: 'app-rick-and-morty-template',
    standalone: true,
    imports: [CommonModule, RouterModule, FooterComponent ],
    templateUrl: './rick-and-morty-template.component.html',
    styleUrl: './rick-and-morty-template.component.scss',
})
export class RickAndMortyTemplateComponent {}
