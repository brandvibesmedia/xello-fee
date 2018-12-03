import { Component, AfterViewInit, QueryList, ViewChildren, HostListener, ElementRef } from '@angular/core';
import { ToolButton, BootstrapTooltip } from './shared';
import { ToolButtonComponent } from './tool-button/tool-button.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
	title = 'Test project';

	@ViewChildren(ToolButtonComponent) tbtns!: QueryList<BootstrapTooltip>;

	tPlacement = 'top';

	toolbuttons: ToolButton[] = [
		{
			id: 1,
			tooltip: 'This is the first tooltip - #1',
			akey: 'a',
			bstooltip: {}
		},
		{
			id: 2,
			tooltip: 'This is the second tooltip - #2',
			akey: 's',
			bstooltip: {}
		}
	];

	constructor(private elRef: ElementRef) { }

	showTooltip(num) {
		let buttonIndex = num + 1;

		// is this the last button?
		if (this.toolbuttons.length === buttonIndex) {
			buttonIndex = num - 1;
		}
		this.toolbuttons[buttonIndex].bstooltip.open();
	}

	ngAfterViewInit() {
		let tmpBsTooltips = this.tbtns.toArray();
		for (let i = 0; i < tmpBsTooltips.length; i++) {
			this.toolbuttons[i].bstooltip = tmpBsTooltips[i].ttip;
		}
	}

	@HostListener("window:scroll", [])

	onWindowScroll() {
		if(this.elRef.nativeElement.getBoundingClientRect().top < -300) {
			this.tPlacement = 'bottom';
		} else {
			this.tPlacement = 'top';
		}

	}

}
