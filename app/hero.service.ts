import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    new Hero('Tuan', 'hello tuan occho', 'url1'),
    new Hero('huy', 'hello huy occho', 'url2'),
    new Hero('vien', 'hello vien occho', 'url3')
  ];
  constructor(private  http: HttpClient) { }
  list(): Hero[] {
    return this.heroes;
  }
  create(hero: Hero) {
    this.heroes.push(hero);
  }
  listLive(): Observable<Hero[]> {
    return this.http.get<{ data: Hero[] }>(
      `http://localhost:8080/hero`,
      {
      }
    ).pipe(
      map(({data}) => data)
    );
  }

  saveLive(hero: Hero): Observable<Hero> {
    console.log('Hello');
    return this.http.post<{ data: Hero }>(
      `http://localhost:8080/hero`,
      hero,
      {
      }
    ).pipe(map(({data}) => data));
  }
}
