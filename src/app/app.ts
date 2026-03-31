import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu'
import { WhyTourz } from './why-tourz/why-tourz';
import { Banner } from './banner/banner'
import { Destinations } from './destinations/destinations';
import { PopularTours } from './popular-tours/popular-tours';
import { BookNow } from './book-now/book-now';
import { TopTrending } from './top-trending/top-trending';
import { Reviews } from './reviews/reviews';
import { Discount } from './discount/discount';
import { Articles } from './articles/articles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, WhyTourz, Banner, Destinations, PopularTours, BookNow, TopTrending, Reviews, Discount, Articles], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividade');
}
