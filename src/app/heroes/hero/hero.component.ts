import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent { // clase

  public name: string =  'iroman' 
  public age: number = 45;

  
   get capitalizedName() : string { // metodo
    return this.name.toUpperCase();
  }

   public getHeroDescription() : string { // metodo
    return `${this.name} - ${this.age}`; 
  }

  changeHero() : void { 
    this.name='Spiderman';


  }

  reset() : void {
    this.name='iroman';
    this.age=45;
  }


  changeAge() : void {
    this.age = 25;

  }
  




}
