import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-sidebar-button',
  templateUrl: './custom-sidebar-button.component.html',
  styleUrls: ['./custom-sidebar-button.component.css']
})
export class CustomSidebarButtonComponent {
  @Input()
  buttonType: string = "code";
  @Input()
  buttonCaption: string = "Material Button"
}
