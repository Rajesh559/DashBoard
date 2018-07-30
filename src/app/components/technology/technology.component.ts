import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  params : object;
  constructor(private activatedRoute: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      console.log('param', param) // param[‘id’] or param.id });
      this.params = param;
  })

  }
}
