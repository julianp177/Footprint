import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {open} from "../dashboard/dashboard.component";



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private localStorage:StorageService) {
  }

  isHovered:number = 0;
  public activateHover(navItem:number) {
    this.isHovered = navItem;
  }

  public deactivateHover(){
    this.isHovered = 0;
  }

  public changeFilter(type:string){
    this.localStorage.saveData('filter',type)
    if(open){
      location.reload()
    }
  }
}
