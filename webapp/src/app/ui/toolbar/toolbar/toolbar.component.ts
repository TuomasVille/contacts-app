import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarOptions} from '../toolbar-options';
import {ToolbarAction} from '../toolbar-action';
import {ToolbarService} from '../toolbar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<any>;
  options: ToolbarOptions;
  mainAction: ToolbarAction;


  constructor(private toolbar: ToolbarService, private location: Location) {
    this.menuClick = new EventEmitter<any>();
    this.options = new ToolbarOptions('menu', 'Contacts Application');
    this.mainAction = new ToolbarAction(this.onMenuClick.bind(this), 'menu');
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe(options => {
      this.options = options;
      if (options.mode === 'menu') {
        this.mainAction = new ToolbarAction(this.onMenuClick.bind(this), 'menu');
      } else if (options.mode === 'back') {
        this.mainAction = new ToolbarAction(this.onNavigateBack.bind(this), 'arrow_back');
    }}
    );
  }

  onMenuClick() {
    console.log('menu clicked');
    this.menuClick.emit();
  }

  onNavigateBack() {
    console.log('back clicked');
    this.location.back();
  }
}
