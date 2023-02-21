import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  input:string = '';
  result:string = '';
  
 
  pressNum(num: string) {
    
    // Not Allowing . more than once
    if (num==".") 
    {
      if (this.input !="" ) 
      {
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) 
        {
          alert("Point repeated!");
          return;
        }

      }
    }
 
    //Not Allowing 0 at beginning. 
    //Javascript will throw error that Octals are not allowed.
    if (num=="0") 
    {
      if (this.input=="" ) {
        alert('For 0. values start with . directly!');
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '%')  {
          return;
      }
    }
    this.input = this.input + num
  }
 
 
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
 
 
  pressOperator(op: string) {
 
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+'|| lastKey === '%')  {
      alert("Operator repeated!");
      return;
    }
   
    this.input = this.input + op
  }
 
 
 
  allClear() {
    this.result = '';
    this.input = '';
  }
 
  calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log("Formula " +formula);
    this.result = eval(formula);
    this.input=this.result;
  }
 
  getAnswer() {
    if(this.input=="")
    {
      alert("BLANK!!");
      return;
    }
    else if(this.input=='+'||this.input=='-'||this.input=='*'||this.input=='/'||this.input=='%')
    {
      alert("Select Numbers along with operators!");
      this.allClear();
    }
    else if(this.input=='.')
    {
      alert("Invalid !!");
      this.allClear();
    }
    else
    {
      this.calcAnswer();
    }
    
    // this.input = this.result;
    // if (this.input=="0") 
    // this.input="";
  }
 
}

