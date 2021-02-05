import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var tableau: any;

@Component({
  selector: 'app-estados-unidos',
  templateUrl: './estados-unidos.component.html',
  styleUrls: ['./estados-unidos.component.css']
})
export class EstadosUnidosComponent{
  viz: any;
  @ViewChild("vizContainer")
  containerDiv!: ElementRef;

  ngAfterViewInit() {
    this.initViz();
  }

  initViz() {
    //Seleciona a url do tableau
    const vizUrl = "https://public.tableau.com/views/COVID-19Cases_15840488375320/COVID-19UnitedStatesView?";
    this.viz = new tableau.Viz(
      this.containerDiv.nativeElement,
      vizUrl,
    );
  }


}
