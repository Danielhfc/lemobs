import { Component, ViewChild, ElementRef, ɵresetJitOptions } from "@angular/core";
declare var tableau: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  viz: any;
  @ViewChild("vizContainer")
  containerDiv!: ElementRef;

  ngAfterViewInit() {
    this.initViz();
  }

  initViz() {
    //Seleciona a url do tableau
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/COVID-19Cases_15840488375320/COVID-19GlobalView?";
    
    var viz = new tableau.Viz(
      containerDiv,
      url,
    );
  }
}
