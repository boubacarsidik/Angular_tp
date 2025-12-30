import { Component } from '@angular/core';
import { DivExperience } from '../div-experience/div-experience';
import { DivFormation } from "../div-formation/div-formation";

@Component({
  selector: 'main-cv',
  imports: [DivExperience, DivFormation,DivFormation],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
