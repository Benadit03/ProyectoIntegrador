import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/service/portafolio.service';

@Component({
  selector: 'app-hard-soft',
  templateUrl: './hard-soft.component.html',
  styleUrls: ['./hard-soft.component.css']
})
  

export class HardSoftComponent implements OnInit {
  skillList: any;

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.skillList = data.skill;
    });
  }
}