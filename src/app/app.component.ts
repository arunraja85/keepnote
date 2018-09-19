import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  notes : Array<Note>;

  constructor(private noteService : NoteService){
   
  }

  ngOnInit(){
    this.noteService.getNotes().subscribe(noteResponse => {
      this.notes = noteResponse;
    });
  }
}
