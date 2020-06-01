import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { root } from 'rxjs/internal/util/root';

export interface rec {
  token: string
}
@Injectable({providedIn:root})
export class TokenService 
{

  constructor(private http:HttpClient) { }

    

}