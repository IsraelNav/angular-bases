import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesName : string[] = ['Spiderman', 'Ironman', 'Flash', 'Capitan America', 'Hulk'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroesName.pop();
  };
}
