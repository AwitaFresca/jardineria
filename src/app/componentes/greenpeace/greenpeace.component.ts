import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greenpeace',
  templateUrl: './greenpeace.component.html',
  styleUrls: ['./greenpeace.component.css']
})
export class GreenpeaceComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
