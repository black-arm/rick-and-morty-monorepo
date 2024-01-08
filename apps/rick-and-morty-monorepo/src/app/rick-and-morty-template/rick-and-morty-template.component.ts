import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneralStore } from '../core/domain/general-store/general-store';
import { FooterComponent } from '../core/components/footer/footer.component';
import { SpinnerComponent } from '../core/components/spinner/spinner.component';


@Component({
    selector: 'app-rick-and-morty-template',
    standalone: true,
    imports: [CommonModule, RouterModule, FooterComponent, SpinnerComponent ],
    templateUrl: './rick-and-morty-template.component.html',
    styleUrl: './rick-and-morty-template.component.scss',
})
export class RickAndMortyTemplateComponent {

  generalStore = inject(GeneralStore)
}
