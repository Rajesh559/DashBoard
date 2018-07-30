import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  model: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      console.log('param', param) // param[‘id’] or param.id });
      this.setValues(param);
  })
}
setValues(param){
  console.log('inside setValues',param)
    this.model.nameInput = param.name;
    this.model.imageInput = param.image;
    this.model.ratingInput = param.rating;
    console.log(param)
    console.log(this.model.nameInput)
}

}
