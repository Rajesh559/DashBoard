import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  person() {
    this.router.navigate(['personal-info'],{relativeTo:this.route})
  }
  contact() {
    this.router.navigate(['contact-info'],{relativeTo:this.route})
  }
  qualification() {
    this.router.navigate(['qualification'],{relativeTo:this.route})
  }

}
