import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickAndMortyTemplateComponent } from './rick-and-morty-template.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

describe('RickAndMortyTemplateComponent', () => {
    let component: RickAndMortyTemplateComponent;
    let fixture: ComponentFixture<RickAndMortyTemplateComponent>;
    let router: Router;

    beforeEach(async () => {

      const routes: Routes = [
        { path: '', component: CharacterMockComponent },
        { path: 'episodes', component: EpisodesMockComponent }
      ]

        await TestBed.configureTestingModule({
            imports: [RickAndMortyTemplateComponent, RouterTestingModule.withRoutes(routes)],
            providers: [

            ]
        }).compileComponents();

        fixture = TestBed.createComponent(RickAndMortyTemplateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should click character link', () => {
      fixture.debugElement.query(By.css('[data-testid="characters"]')).nativeElement.click();
      expect(router.url).toBe('/');
      const text = fixture.debugElement.query(By.css('[data-testid="charMock"]')).nativeElement.textContent;
      expect(text).toBe('CharacterPage')
    })

    it('should click episodes link', () => {
      fixture.debugElement.query(By.css('[data-testid="episodes"]')).nativeElement.click();
      expect(router.url).toBe('/episodes');
      const text = fixture.debugElement.query(By.css('[data-testid="episodesMock"]')).nativeElement.textContent;
      expect(text).toBe('EpisodesPage')
    })
});

@Component({
  template: `<div data-testid="charMock">CharacterPage</div>`
})
class CharacterMockComponent {}

@Component({
  template: `<div data-testid="episodesMock">EpisodesPage</div>`
})
class EpisodesMockComponent {}
