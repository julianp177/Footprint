import { Component } from '@angular/core';
import {StorageService} from "./services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Footprint';
  onTheLeft:boolean = true;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(){
    this.onTheLeft=this.storageService.getData("leftside")
  }
}
