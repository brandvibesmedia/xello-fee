export class ToolButton {
	id: number;
	tooltip: string;
	akey: string;
	bstooltip: any
}

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

export class BootstrapTooltip extends NgbTooltip {
	ttip: any
}