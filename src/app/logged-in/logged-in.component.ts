import { Component, OnInit } from '@angular/core';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { RouterModule, Routes, Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.router.navigate(['player'],{relativeTo:this.route});
  }

  showPlayer()
  {
    this.router.navigate(['player'],{relativeTo:this.route});
  }

  showTeam()
  {
    this.router.navigate(['team'],{relativeTo:this.route});
  }

  showSearch()
  {
    this.router.navigate(['search'],{relativeTo:this.route});
  }

  logOut()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }

}