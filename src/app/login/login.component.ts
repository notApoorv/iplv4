import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TokenService } from "../token.service";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Router} from '@angular/router';

export class details {
  constructor(public password: string,public username: string ) {}
}

export interface rec 
{
  token: string
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit 
{
  constructor(private _tokenService:TokenService,
  private http:HttpClient,private router: Router) {}

  ngOnInit() {}

  model = new details("", "");
  creds:rec[]=[];


  
  getToken():void
  {
    if(this.model.password!="admin" || this.model.username!="admin@gmail.com")
    {
    document.getElementById("wrongIDContainer").style.visibility="visible";
    return;
    }
    var myJSON = JSON.stringify(this.model);
    console.log(myJSON); 

    const httpOptions = 
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.http.post("https://indipl2020.herokuapp.com/authenticate",myJSON,httpOptions)
    .subscribe
    (val => 
      {
        console.log(val);
        const values = Object.keys(val).map(key => val[key]);
        const commaJoinedValues = values.join(",");
        this.router.navigateByUrl('/logged-in');
        localStorage.setItem("storedToken",commaJoinedValues);
        
      }
    )
    

  

}
}

