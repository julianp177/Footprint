import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";

export let open:boolean=false;

interface company {
  Company: string;
  Industry: string,
  Country: string,
  CARR: number,
  Year: string,
  CO2: number,
  Emission: number,
  Scope3: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private localStorage:StorageService) {
  }

  data: company[] = [

      {
        "Company": "Ceconomy",
        "Industry": "Elektronik und Elektrotechnik",
        "Country": "USA",
        "CARR": 33.7,
        "Year": "2016–2019",
        "CO2": 4.2,
        "Emission": 90900,
        "Scope3": "ja"
      },
      {
        "Company": "Munich Re",
        "Industry": "Versicherungen",
        "Country": "Deutschland",
        "CARR": 28.3,
        "Year": "2016–2019",
        "CO2": 1.4,
        "Emission": 71249,
        "Scope3": "ja"
      },
      {
        "Company": "Surteco Group",
        "Industry": "Konsum- und Haushaltsgueter",
        "Country": "Polen",
        "CARR": 27.5,
        "Year": "2016–2019",
        "CO2": 78.9,
        "Emission": 53282,
        "Scope3": "nein"
      },
      {
        "Company": "Vorwerk",
        "Industry": "Konsum- und Haushaltsgueter",
        "Country": "Deutschland",
        "CARR": 26.5,
        "Year": "2016–2018",
        "CO2": 5.1,
        "Emission": 14168,
        "Scope3": "nein"
      },
      {
        "Company": "PSI Software",
        "Industry": "Technologie und Telekommunikation",
        "Country": "USA",
        "CARR": 25.8,
        "Year": "2014–2019",
        "CO2": 3.4,
        "Emission": 769,
        "Scope3": "ja"
      },
    {
      "Company": "Zalando",
      "Industry": "Handel",
      "Country": "USA",
      "CARR": 40.9,
      "Year": "2016–2019",
      "CO2": 1.3,
      "Emission": 8175,
      "Scope3": "ja"
    },
    {
      "Company": "Gardena",
      "Industry": "Maschinenbau und Industrietechnik",
      "Country": "Italien",
      "CARR": 35.3,
      "Year": "2015–2019",
      "CO2": 14.3,
      "Emission": 11385,
      "Scope3": "ja"
    },
    {
      "Company": "Barmenia",
      "Industry": "Versicherungen",
      "Country": "Deutschland",
      "CARR": 34,
      "Year": "2016–2019",
      "CO2": 0.2,
      "Emission": 421,
      "Scope3": "ja"
    },
    {
      "Company": "Telefónica Deutschland",
      "Industry": "Technologie und Telekommunikation",
      "Country": "Deutschland",
      "CARR": 25.6,
      "Year": "2014–2019",
      "CO2": 11.9,
      "Emission": 88513,
      "Scope3": "ja"
    },
    {
      "Company": "Puma",
      "Industry": "Mode",
      "Country": "USA",
      "CARR": 25.6,
      "Year": "2014–2019",
      "CO2": 3.2,
      "Emission": 17859,
      "Scope3": "ja"
    },
    {
      "Company": "Porsche",
      "Industry": "Automobil und Zulieferer",
      "Country": "Deutschland",
      "CARR": 23.9,
      "Year": "2014–2019",
      "CO2": 2,
      "Emission": 57685,
      "Scope3": "ja"
    },
    {
      "Company": "DAW",
      "Industry": "Chemie und Pharmazie",
      "Country": "USA",
      "CARR": 23.6,
      "Year": "2015–2019",
      "CO2": 13.2,
      "Emission": 9532,
      "Scope3": "nein"
    },
    {
      "Company": "Adidas",
      "Industry": "Mode",
      "Country": "Deutschland",
      "CARR": 23.4,
      "Year": "2015–2019",
      "CO2": 1.2,
      "Emission": 28310,
      "Scope3": "nein"
    },
    {
      "Company": "Kuka",
      "Industry": "Maschinenbau und Industrietechnik",
      "Country": "Italien",
      "CARR": 23,
      "Year": "2017–2019",
      "CO2": 9.7,
      "Emission": 31923,
      "Scope3": "nein"
    },
    {
      "Company": "Bauer AG (Maschinenbau)",
      "Industry": "Maschinenbau und Industrietechnik",
      "Country": "Deutschland",
      "CARR": 18.1,
      "Year": "2014–2019",
      "CO2": 3.2,
      "Emission": 4773,
      "Scope3": "nein"
    },
    {
      "Company": "SAP",
      "Industry": "Technologie und Telekommunikation",
      "Country": "Deutschland",
      "CARR": 17.5,
      "Year": "2014–2019",
      "CO2": 10.9,
      "Emission": 300000,
      "Scope3": "ja"
    },
    {
      "Company": "Deutsche Telekom",
      "Industry": "Technologie und Telekommunikation",
      "Country": "Deutschland",
      "CARR": 17,
      "Year": "2014–2019",
      "CO2": 22.4,
      "Emission": 1802017,
      "Scope3": "ja"
    },
    {
      "Company": "Bausparkasse Schwäbisch Hall",
      "Industry": "Banken",
      "Country": "Deutschland",
      "CARR": 16.5,
      "Year": "2017–2019",
      "CO2": 0.8,
      "Emission": 1280,
      "Scope3": "ja"
    },
    {
      "Company": "Bayer",
      "Industry": "Chemie und Pharmazie",
      "Country": "Deutschland",
      "CARR": 16.2,
      "Year": "2014–2019",
      "CO2": 85.2,
      "Emission": 3710000,
      "Scope3": "ja *"
    },
    {
      "Company": "1&1 Drillisch",
      "Industry": "Technologie und Telekommunikation",
      "Country": "Deutschland",
      "CARR": 15.9,
      "Year": "2016–2019",
      "CO2": 0.6,
      "Emission": 2264,
      "Scope3": "ja"
    },
    {
      "Company": "Nürnberger Versicherung",
      "Industry": "Versicherungen",
      "Country": "Deutschland",
      "CARR": 15.8,
      "Year": "2017–2019",
      "CO2": 0.9,
      "Emission": 3336,
      "Scope3": "nein"
    },
    {
      "Company": "Wüstenrot & Württembergische",
      "Industry": "Versicherungen",
      "Country": "Deutschland",
      "CARR": 15.4,
      "Year": "2014–2019",
      "CO2": 3.4,
      "Emission": 8076,
      "Scope3": "ja"
    },
    {
      "Company": "Medion",
      "Industry": "Elektronik und Elektrotechnik",
      "Country": "USA",
      "CARR": 14.5,
      "Year": "2015–2019",
      "CO2": 0.6,
      "Emission": 502,
      "Scope3": "nein"
    },
    {
      "Company": "Deutsche Bank",
      "Industry": "Banken",
      "Country": "Deutschland",
      "CARR": 14.5,
      "Year": "2014–2019",
      "CO2": 6.6,
      "Emission": 153721,
      "Scope3": "ja"
    },
    {
      "Company": "Symrise",
      "Industry": "Lebensmittel und Duftstoffe",
      "Country": "USA",
      "CARR": 14.4,
      "Year": "2014–2019",
      "CO2": 1.2,
      "Emission": 28310,
      "Scope3": "nein"
    },
    {
      "Company": "Coca-Cola Deutschland",
      "Industry": "Lebensmittel und Duftstoffe",
      "Country": "Deutschland",
      "CARR": 20.7,
      "Year": "2014–2019",
      "CO2": 144.5,
      "Emission": 406129,
      "Scope3": "ja"
    },
    {
      "Company": "Signal Iduna Lebensversicherung",
      "Industry": "Versicherungen",
      "Country": "Deutschland",
      "CARR": 20.2,
      "Year": "2017–2019",
      "CO2": 7.4,
      "Emission": 9614,
      "Scope3": "ja"
    },
    {
      "Company": "Interseroh",
      "Industry": "Entsorgung und Umwelt",
      "Country": "Grossbritannien",
      "CARR": 19.4,
      "Year": "2016–2018",
      "CO2": 39.5,
      "Emission": 29164,
      "Scope3": "ja"
    },
    {
      "Company": "Beiersdorf (nur Körperpflege)",
      "Industry": "Kosmetik",
      "Country": "Deutschland",
      "CARR": 18.2,
      "Year": "2014–2019",
      "CO2": 7,
      "Emission": 43670,
      "Scope3": "ja"
    },


  ];
  tableFilter:string="";
  displayedData: company[] = [];
  searchTerm: string = '';
  key:any="";

  ngOnInit(): void {

    open=true;
    this.tableFilter = this.localStorage.getData('filter')

    if(this.tableFilter==="Sc3"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Scope3==="ja"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Versicherungen"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Versicherungen"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Technologie"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Technologie und Telekommunikation"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Lebensmittel"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Lebensmittel und Duftstoffe"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Konsum"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Konsum- und Haushaltsgueter"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Maschinenbau"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Maschinenbau und Industrietechnik"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Handel"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Handel"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Mode"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Mode"){
          this.displayedData.push(this.data[i])
        }
      }
    }else if(this.tableFilter==="Chemie"){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].Industry==="Chemie und Pharmazie"){
          this.displayedData.push(this.data[i])
        }
      }
    }else{
      this.displayedData = this.data.slice()
    }
  }

  ngOnDestroy (){
    open=false;
  }
  sortData(key: keyof company): void {
    this.key = key;
    this.displayedData.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  applyFilter(): void {
    this.displayedData = this.data.filter(comp =>
      comp.Company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      comp.Country.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      comp.Industry.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      comp.Year.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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
