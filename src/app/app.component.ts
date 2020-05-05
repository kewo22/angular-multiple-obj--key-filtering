import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  arr: any[] = [];

  filter: Filter[] = []; 

  ngOnInit() {
    this.arr = [
      {
        indexCode: "IC001",
        desc: "DWQQW DQWWQD DWQWQ"
      },
      {
        indexCode: "IC002",
        desc: "UDHUQWI IJEWD DWEIJD WEIWED"
      },
      {
        indexCode: "IC003",
        desc: "NNMCBNBNX KLDQKWNDKWQM, QNWDKQD"
      },
      {
        indexCode: "IC004",
        desc: "GDS HGSJ DHKJ SDL"
      },
      {
        indexCode: "IC005",
        desc: "LKLKSDL SDWQE SDSF QWE"
      },
      {
        indexCode: "IC006",
        desc: "POPOUYE YGQWYGE KSAJKSD SAKDLAS DASDASD "
      }
    ];
  }

  onInChanhe(event, x): void {

    var foundIndex = this.filter.findIndex(f => f.field === x.key);
    if (foundIndex >= 0) {
      this.filter[foundIndex] = {
        field: x.key,
        value: event.target.value
      };
    } else {
      this.filter.push({
        field: x.key,
        value: event.target.value
      });
    }
    this.filterarr();
  }

  filterarr(): void {
    let filteredArr;

    this.filter.forEach((filterOpt: Filter) => {
      filteredArr = this.arr.filter(x => {
        return x[filterOpt.field] === filterOpt.value;
      });
    });

    console.log(filteredArr);
  }
}

interface Filter {
  field: string;
  value: string;
}
