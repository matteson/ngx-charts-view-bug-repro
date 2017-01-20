import { Component, OnInit, Output, EventEmitter } from '@angular/core';

let newData = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 1
      },
      {
        "name": "2011",
        "value": 2
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 3
      },
      {
        "name": "2011",
        "value": 4
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5
      },
      {
        "name": "2011",
        "value": 6
      }
    ]
  }
];

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Output()
  notifyChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeData() {
    this.notifyChange.emit(newData);
  }

}
