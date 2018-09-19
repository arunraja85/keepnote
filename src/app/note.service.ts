import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { getTreeNoValidDataSourceError } from '../../node_modules/@angular/cdk/tree';
import { Observable } from '../../node_modules/rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpclient : HttpClient) { }
    getNotes() : Observable<Array<Note>>{
      return this.httpclient.get<Array<Note>>("http://localhost:3000/notes")
    }
}
