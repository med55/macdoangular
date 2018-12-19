import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-macdo',
  templateUrl: './macdo.component.html',
  styleUrls: ['./macdo.component.css']
})
export class MacdoComponent implements OnInit {
  macdo: any;
  codeEtat: any;
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  getMacdo() {
    console.log("Calling macdo service rest ....");
    this.rest.getMacdo(this.codeEtat).subscribe((data: {}) => {
      console.log(data);
      this.macdo = data;
    });
  }
}
