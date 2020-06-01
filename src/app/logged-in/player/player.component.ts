import { Component, OnInit, HostListener } from "@angular/core";
import { ViewEncapsulation, ElementRef } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AfterViewInit, ViewChild } from "@angular/core";
declare var google: any;
@Component({
  selector: "app-player",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  @ViewChild("pieChart") pieChart: ElementRef;

  list;
  loading = true;
  constructor(private elem: ElementRef, private _http: HttpClient) {}
  base_url = "https://indipl2020.herokuapp.com/ipl2020/team/";
  ngOnInit() {
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

    var s = document.getElementById("slct1");
    const url = "https://indipl2020.herokuapp.com/ipl2020/team/labels";
    response(url)
      .then(res => res.json())
      .then(data => {
        this.loading = false;
        this.list = data;
        for (var p in data) {
          var arr = data[p];
          for (var i = 0; i < 8; i++) {
            var option = document.createElement("option");
            option.text = arr[i];
            s.add(option);
          }
        }
      });
  }

  closeBat()
  {
    var formElement = <HTMLFormElement>document.getElementById('batChart');
    formElement.style.display='none';

    var formElement2=<HTMLFormElement>document.getElementById('teamSelector');
    formElement2.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement2.style.pointerEvents='all';

    var formElement3=<HTMLFormElement>document.getElementById('chart_div');
    formElement3.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement3.style.pointerEvents='all';

    var formElement4=<HTMLFormElement>document.getElementById('selText');
    formElement4.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement4.style.pointerEvents='all';

    var formElement5=<HTMLFormElement>document.getElementById('gridCont');
    formElement5.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement5.style.pointerEvents='all';

    var formElement6=<HTMLFormElement>document.getElementById('NB');
    formElement6.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement6.style.pointerEvents='all';

  }

  closeBow()
  {
    var formElement = <HTMLFormElement>document.getElementById('bowChart');
    formElement.style.display='none';

    var formElement2=<HTMLFormElement>document.getElementById('teamSelector');
    formElement2.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement2.style.pointerEvents='all';

    var formElement3=<HTMLFormElement>document.getElementById('chart_div');
    formElement3.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement3.style.pointerEvents='all';

    var formElement4=<HTMLFormElement>document.getElementById('selText');
    formElement4.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement4.style.pointerEvents='all';

    var formElement5=<HTMLFormElement>document.getElementById('gridCont');
    formElement5.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement5.style.pointerEvents='all';

    var formElement6=<HTMLFormElement>document.getElementById('NB');
    formElement6.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement6.style.pointerEvents='all';


  }

  closeAll()
  {
    var formElement = <HTMLFormElement>document.getElementById('allChart');
    
    formElement.style.display='none';

    var formElement2=<HTMLFormElement>document.getElementById('teamSelector');
    formElement2.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement2.style.pointerEvents='all';

    var formElement3=<HTMLFormElement>document.getElementById('chart_div');
    formElement3.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement3.style.pointerEvents='all';

    var formElement4=<HTMLFormElement>document.getElementById('selText');
    formElement4.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement4.style.pointerEvents='all';

    var formElement5=<HTMLFormElement>document.getElementById('gridCont');
    formElement5.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement5.style.pointerEvents='all';

    var formElement6=<HTMLFormElement>document.getElementById('NB');
    formElement6.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement6.style.pointerEvents='all';


  }

  closeWic()
  {
    var formElement = <HTMLFormElement>document.getElementById('wicChart');
    
    formElement.style.display='none';

    var formElement2=<HTMLFormElement>document.getElementById('teamSelector');
    formElement2.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement2.style.pointerEvents='all';

    var formElement3=<HTMLFormElement>document.getElementById('chart_div');
    formElement3.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement3.style.pointerEvents='all';

    var formElement4=<HTMLFormElement>document.getElementById('selText');
    formElement4.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement4.style.pointerEvents='all';

    var formElement5=<HTMLFormElement>document.getElementById('gridCont');
    formElement5.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement5.style.pointerEvents='all';

    var formElement6=<HTMLFormElement>document.getElementById('NB');
    formElement6.setAttribute("style","-webkit-filter:blur(" + 0 + "px)");
    formElement6.style.pointerEvents='all';


  }

  dispTab() {
    this.loading = true;
    let token_base: string = "Bearer ";
    let tokenID = localStorage.getItem("storedToken");
    let token = token_base + tokenID;
    console.log(token);
    let response = function(url) {
      return fetch(url, {
        headers: {
          Authorization: token
        }
      });
    };

    var roles = new Array();
    var s = (<HTMLInputElement>document.getElementById("slct1")).value;
    const url = this.base_url.concat(s);
    response(url)
      .then(res => res.json())
      .then(data => {
        this.list = data;
        this.loading = false;
        for (var p in this.list) {
          this.list[p].name = this.updateName(data[p].name);
          this.list[p].price = "Rs. " + this.inWords(data[p].price);
          roles.push(this.list[p].role);
        }

        var batCount = 0;
        var bowCount = 0;
        var allCount = 0;
        var wicCount = 0;
        for (var a = 0; a < roles.length; a++) {
          if (roles[a] == "Batsman") {
            batCount++;
          }
          if (roles[a] == "Wicket Keeper") {
            wicCount++;
          }
          if (roles[a] == "All-Rounder") {
            allCount++;
          }
          if (roles[a] == "Bowler") {
            bowCount++;
          }
        }


        this.LoadGoogle(batCount, bowCount, allCount, wicCount);
      });
  }

  inWords(num) {
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

  updateName(s) {
    var has = -1;
    var len = s.length;
    var last = s.charAt(len - 1);
    if (last == ")") has = 1;
    var newname = s;
    if (has == 1) newname = newname.substring(0, len - 4);
    return newname;
  }

  LoadGoogle(batCount, bowCount, allCount, wicCount) {
    google.charts.load("current", {
      callback: drawChart,
      packages: ["corechart"]
    });

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Role", "Number"],
        ["Batsmen", batCount],
        ["Bowler", bowCount],
        ["All-Rounder", allCount],
        ["Wicket-Keeper", wicCount]
      ]);

      var options = {
        title: "Role Distribution",
        width: 800,
        height: 600,
        pieHole: 0.4
      };

      function onAreaSliceSelected() {
        var selectedItem = chart.getSelection()[0];
        
          
        //alert(selectedItem.row);

          showCard(selectedItem.row);
        
      }

      function showCard(n) {
        
        if (n == 0) 
        {
          var formElement = <HTMLFormElement>document.getElementById('batChart');
          formElement.style.display='inline';
          
          var formElement2=<HTMLFormElement>document.getElementById('gridCont');
          formElement2.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement2.style.pointerEvents='none';

          var formElement3=<HTMLFormElement>document.getElementById('teamSelector');
          formElement3.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement3.style.pointerEvents='none';

          var formElement4=<HTMLFormElement>document.getElementById('chart_div');
          formElement4.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement4.style.pointerEvents='none';

          var formElement5=<HTMLFormElement>document.getElementById('selText');
          formElement5.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement5.style.pointerEvents='none';

          var formElement6=<HTMLFormElement>document.getElementById('NB');
          formElement6.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement6.style.pointerEvents='none';


        
        }
        else if (n == 1) 
        {
          var formElement = <HTMLFormElement>document.getElementById('bowChart');
          formElement.style.display='inline';

          var formElement2=<HTMLFormElement>document.getElementById('gridCont');
          formElement2.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement2.style.pointerEvents='none';

          var formElement3=<HTMLFormElement>document.getElementById('teamSelector');
          formElement3.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement3.style.pointerEvents='none';

          var formElement4=<HTMLFormElement>document.getElementById('chart_div');
          formElement4.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement4.style.pointerEvents='none';

          var formElement5=<HTMLFormElement>document.getElementById('selText');
          formElement5.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement5.style.pointerEvents='none';

          var formElement6=<HTMLFormElement>document.getElementById('NB');
          formElement6.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement6.style.pointerEvents='none';

        }
        else if (n == 2) 
        {
          var formElement = <HTMLFormElement>document.getElementById('allChart');
          formElement.style.display='inline';

          var formElement2=<HTMLFormElement>document.getElementById('gridCont');
          formElement2.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement2.style.pointerEvents='none';

          var formElement3=<HTMLFormElement>document.getElementById('teamSelector');
          formElement3.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement3.style.pointerEvents='none';

          var formElement4=<HTMLFormElement>document.getElementById('chart_div');
          formElement4.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement4.style.pointerEvents='none';

          var formElement5=<HTMLFormElement>document.getElementById('selText');
          formElement5.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement5.style.pointerEvents='none';

          var formElement6=<HTMLFormElement>document.getElementById('NB');
          formElement6.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement6.style.pointerEvents='none';
        }
        else if (n == 3) 
        {
          var formElement = <HTMLFormElement>document.getElementById('wicChart');
          formElement.style.display='inline';

          var formElement2=<HTMLFormElement>document.getElementById('gridCont');
          formElement2.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement2.style.pointerEvents='none';

          var formElement3=<HTMLFormElement>document.getElementById('teamSelector');
          formElement3.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement3.style.pointerEvents='none';

          var formElement4=<HTMLFormElement>document.getElementById('chart_div');
          formElement4.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement4.style.pointerEvents='none';

          var formElement5=<HTMLFormElement>document.getElementById('selText');
          formElement5.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement5.style.pointerEvents='none';

          var formElement6=<HTMLFormElement>document.getElementById('NB');
          formElement6.setAttribute("style","-webkit-filter:blur(" + 3 + "px)");
          formElement6.style.pointerEvents='none';
        }
        chart.setSelection();
      }

      var chart = new google.visualization.PieChart(
        document.getElementById("chart_div")
      );
      chart.draw(data, options);
      google.visualization.events.addListener(chart,"select",onAreaSliceSelected);
    }
  }
}
