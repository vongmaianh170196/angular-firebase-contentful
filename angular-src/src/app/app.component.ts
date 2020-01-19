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
  lesson$:Array<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.getContent().subscribe(subsciber => this.lesson$ = subsciber.items)
  }
}
