import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headerpri',
  templateUrl: './headerpri.component.html',
  styleUrls: ['./headerpri.component.css']
})
export class HeaderpriComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('uname');
    this.router.navigate(['/home/home-main']);
  }
  
}
