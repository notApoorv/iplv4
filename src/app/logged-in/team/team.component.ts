import { Component, OnInit, HostListener } from "@angular/core";
import { ViewEncapsulation, ElementRef } from "@angular/core";
declare var google: any;
@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  list;
  loading = true;
  constructor(private elem: ElementRef) {}
  base_url = "https://indipl2020.herokuapp.com/ipl2020/team/";
  ngOnInit() {
    /*(<HTMLScriptElement>document.getElementById("container")).innerHTML = "";*/

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

    const url = "https://indipl2020.herokuapp.com/ipl2020/team/all";
    response(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.list = data;
        this.loading = false;
      });

      this.drawBar();
  }

  drawBar()
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

    const url = "https://indipl2020.herokuapp.com/ipl2020/team/totalamount";
    response(url).then(res=>res.json()).then(data=>{
        console.log(data);
        var rcbAmount=0;
        var kkrAmount=0;
        var miAmount=0;
        var kxipAmount=0;
        var dcAmount=0;
        var cskAmount=0;
        var srhAmount=0;
        var rrAmount=0;
        for(var i=0;i<8;i++)
        {
            var ob=data[i];
            if(ob.teamName=="RCB")
                rcbAmount=ob.amount;
            if(ob.teamName=="KKR")
                kkrAmount=ob.amount;
            if(ob.teamName=="MI")
                miAmount=ob.amount;
            if(ob.teamName=="KXIP")
                kxipAmount=ob.amount;
            if(ob.teamName=="DC")
                dcAmount=ob.amount;
            if(ob.teamName=="CSK")
                cskAmount=ob.amount;
            if(ob.teamName=="SRH")
                srhAmount=ob.amount;
            if(ob.teamName=="RR")
                rrAmount=ob.amount;
        }

        console.log(rcbAmount);
        console.log(kkrAmount);
        console.log(miAmount);
        console.log(kxipAmount);
        console.log(dcAmount);
        console.log(cskAmount);
        console.log(srhAmount);
        console.log(rrAmount);

        this.LoadGoogle(rcbAmount,kkrAmount,miAmount,kxipAmount,dcAmount,cskAmount,srhAmount,rrAmount);
  });}

  LoadGoogle(rcbAmount,kkrAmount,miAmount,kxipAmount,dcAmount,cskAmount,srhAmount,rrAmount) 
  {
    google.charts.load("current", {
      callback: drawChart,
      packages: ["corechart"]
    });

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Team", "Cumulative Amount"],
        ["RCB", rcbAmount],
        ["KKR", kkrAmount],
        ["MI", miAmount],
        ["KXIP", kxipAmount],
        ["DC", dcAmount],
        ["CSK", cskAmount],
        ["SRH", srhAmount],
        ["RR", rrAmount]
      ]);

      var options = {
        title: "Team Cost",
        width: 800,
        height: 520,
      };

      function onAreaSliceSelected() {
        var selectedItem = chart.getSelection()[0];
        
          
        alert(selectedItem.row);

        //this.showCard2(selectedItem.row);
        
      }

   

      

      
  
      var chart = new google.visualization.BarChart(
        document.getElementById("chart_div2")
      );
      chart.draw(data, options,onAreaSliceSelected);
      

      
    }
  }





}

