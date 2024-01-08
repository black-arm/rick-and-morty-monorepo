import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { CardComponent } from '../card/card.component';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

describe('CardListComponent', () => {
    let component: CardListComponent;
    let fixture: ComponentFixture<CardListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardListComponent, CardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should click to next page', () => {
        let nextPage: number = 0;
        component.pageSelected
            .pipe(first())
            .subscribe((result) => (nextPage = result));

        const nextButton = fixture.debugElement.query(
            By.css('[data-testid="next"]')
        );
        nextButton.nativeElement.click();
        const currentPage = fixture.debugElement.query(
            By.css('[data-testid="currentPage"]')
        );
        fixture.detectChanges();

        expect(currentPage.nativeElement.textContent).toContain('Page 2');
        expect(nextPage).toEqual(2);
    });

    it('should click to next page with total pages to 10', () => {
        component.totalPages = 10;
        component.currentPage.set(10);

        const nextButton = fixture.debugElement.query(
            By.css('[data-testid="next"]')
        );
        nextButton.nativeElement.click();
        const currentPage = fixture.debugElement.query(
            By.css('[data-testid="currentPage"]')
        );
        fixture.detectChanges();

        expect(currentPage.nativeElement.textContent).toContain('Page 10');
    });

    it('should click to prev page to 9', () => {
        component.totalPages = 10;
        component.currentPage.set(10);

        let prevPage: number = 0;
        component.pageSelected
            .pipe(first())
            .subscribe((result) => (prevPage = result));

        const prevButton = fixture.debugElement.query(
            By.css('[data-testid="prev"]')
        );
        prevButton.nativeElement.click();
        fixture.detectChanges();
        const currentPage = fixture.debugElement.query(
            By.css('[data-testid="currentPage"]')
        );
        expect(currentPage.nativeElement.textContent).toContain('Page 9');
        expect(prevPage).toBe(9);
    });

    it('should click to prev page 10', () => {
        const prevButton = fixture.debugElement.query(
            By.css('[data-testid="prev"]')
        );
        prevButton.nativeElement.click();
        fixture.detectChanges();
        const currentPage = fixture.debugElement.query(
            By.css('[data-testid="currentPage"]')
        );
        expect(currentPage.nativeElement.textContent).toContain('Page 1');
    });
});
