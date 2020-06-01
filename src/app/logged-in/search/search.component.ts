import { Component, OnInit } from '@angular/core';
import $ from "jquery";
declare var global: any
global.jQuery = $;
import "jqueryui";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list;
  mat;
  constructor() { }
  
  
  loading = true;
  ngOnInit() 
  {
    let token_base: string = "Bearer ";
    let tokenID = localStorage.getItem("storedToken");
    let token = token_base + tokenID;

    let response = function(url) {
      return fetch(url, {
        headers: {
          Authorization: token
        }
      });
    };

    
    const url = "https://indipl2020.herokuapp.com/ipl2020/team/players/all";
    response(url)
      .then(res => res.json())
      .then(data => {
        this.list = data;
        this.loading = false;
        //console.log(this.list);
  });

  }

  keyDownFunction(event) 
  {
    var matches=new Array();
    matches=[];
    this.mat=[];
    if (event.keyCode === 13) 
    {
      var formElement = <HTMLFormElement>document.getElementById('SB');
      var term=formElement.value;
      for(var p in this.list)
      {
        var arr=this.list[p];
        const arr2 = JSON.parse(JSON.stringify(arr));
        //console.log(arr);
        var st=(term).toLowerCase();
        if(((arr.name).toLowerCase()).includes(st))
        {
          arr2.price = "Rs. " + this.inWords(arr2.price);
          matches.push(arr2); 
        }
      }
      this.mat=matches;
     
      console.log(matches);
    }
  }

  inWords(num) 
  {

    var a = [
      "",
      "One ",
      "Two ",
      "Three ",
      "Four ",
      "Five ",
      "Six ",
      "Seven ",
      "Eight ",
      "Nine ",
      "Ten ",
      "Eleven ",
      "Twelve ",
      "Thirteen ",
      "Fourteen ",
      "Fifteen ",
      "Sixteen ",
      "Seventeen ",
      "Eighteen ",
      "Nineteen "
    ];
    var b = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety"
    ];
    var n;
    console.log("called "+ num);
    if ((num = num.toString()).length > 9) return "overflow";
    n = ("000000000" + num)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str +=
      n[1] != 0
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "Crore "
        : "";
    str +=
      n[2] != 0
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "Lakh "
        : "";
    str +=
      n[3] != 0
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "Thousand "
        : "";
    str +=
      n[4] != 0
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "Hundred "
        : "";
    str +=
      n[5] != 0
        ? (str != "" ? "and " : "") +
          (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
          "only "
        : "";
    return str;
  }

}