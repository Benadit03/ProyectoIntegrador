import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/service/portafolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceList: any;

  constructor(private datosPortafolio:PortafolioService ) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.experienceList = data.experience;
    });
  }

}
