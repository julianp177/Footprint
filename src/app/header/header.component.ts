import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";

export let leftside:boolean = true;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  imagePath:string = "assets/flag.png"

  constructor(private storageService: StorageService) {
  }

  ngOnInit(){
    this.imagePath=this.storageService.getData("img-path")
    let imgElement=document.getElementById("header-flag")
  }

  isHovered:number = 0;
  activateHover(navItem:number) {
    this.isHovered = navItem;
  }

  deactivateHover(){
    this.isHovered = 0;
  }
  toggleSidebar(lefty:boolean,pathy:string){
    this.storageService.saveData("leftside",lefty);
    this.storageService.saveData("img-path",pathy);
    location.reload();
  }
}
