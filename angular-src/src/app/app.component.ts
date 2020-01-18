import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from './services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lesson$:Entry<any>[] = [];

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.getContent().then(items => this.lesson$ = items)
  }
}
