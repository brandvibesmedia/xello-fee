import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tool-button',
  templateUrl: './tool-button.component.html',
  styleUrls: ['./tool-button.component.scss']
})
export class ToolButtonComponent implements OnInit {

	@Input('num') num: number;
	@Input('tooltip') tooltip: string;
	@Input('akey') akey: string;
	@Input('placement') placement: string;

	@ViewChild('t') ttip: NgbTooltip;

	@Output() bclick = new EventEmitter<Event>();


	onClick(event: Event, num): void {
		this.bclick.emit(num);
	}
  constructor() { }

  ngOnInit() {
  }

}