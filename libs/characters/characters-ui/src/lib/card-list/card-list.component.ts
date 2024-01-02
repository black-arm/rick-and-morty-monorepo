import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../characters-ui/src/lib/card/card.component';
import { Character } from '@rick-and-morty-monorepo/characters-util';

@Component({
    selector: 'app-card-list',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

  @Input()
  characters: Character[] | null = []

  @Input()
  totalPages: number | null = 0;

  currentPage: WritableSignal<number> = signal<number>(1);

  @Output()
  pageSelected = new EventEmitter<number>();

  onClick($event: 'next' | 'prev'){
    if($event === 'next'){
      this.nextPage()
    }else {
      this.prevPage();
    }
  }

  private nextPage() {
    if(this.currentPage() === this.totalPages){
      return;
    }

    this.emitPageSelected(value => value + 1);
  }

  private prevPage(){
    if(this.currentPage() === 1){
      return;
    }
    this.emitPageSelected(value => value - 1);
  }

  private emitPageSelected(fn: (value: number) => number){
    this.currentPage.update(fn);
    this.pageSelected.emit(this.currentPage());
  }
}
