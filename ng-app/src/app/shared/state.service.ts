import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../home/article';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public activeSlide: BehaviorSubject<Partial<Article>> = new BehaviorSubject(null);
  public activeSlideIndex: BehaviorSubject<number> = new BehaviorSubject(null);
  public activeTab: BehaviorSubject<string> = new BehaviorSubject(null);
  public acticeFav: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public activeLang: BehaviorSubject<string> = new BehaviorSubject(navigator.language === 'de' || navigator.language === 'de-DE' ? 'de' : 'en');
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor() {
  }
}
