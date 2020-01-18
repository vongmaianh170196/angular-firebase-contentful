import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful';
import { environment } from '../../environments/environment';
import { Observable, from} from 'rxjs';
import * as marked from 'marked';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  // console logs a response for debugging
  logContent(contentId) {
     this.client.getEntry(contentId)
      .then(entry => console.log(entry) )
  }

  // retrieves content mapped to its data fields
  getContent() :Promise<Entry<any>[]>{
    return this.client.getEntries()
    .then(entries => entries.items)
  }

  // convert markdown string to 
  markdownToHtml(md: string) {
    return marked(md)
  }
}
