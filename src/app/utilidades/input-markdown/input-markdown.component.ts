import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  placeHolderTextarea: string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  contenidoMarkdown = '';
  ngOnInit(): void {
  }

  inputTextArea(texto: string) {
    this.contenidoMarkdown = texto;
    this.changeMarkdown.emit(texto);
  }
}
