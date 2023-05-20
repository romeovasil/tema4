import {Component, OnInit} from '@angular/core';
import {Student} from "./student";
import {StudentService} from "./student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  students :Map<string,string>;
  currentDate: number;
  constructor(private studentService:StudentService) {
    this.students=new Map<string, string>();
    this.currentDate=new Date().getDate();
  }

  ngOnInit(): void {
    let students:Student[]=[];
    this.studentService.getStudents().subscribe(
      data=>{
        students=data;
        for(const student of students){
          if(this.currentDate%this.getVowels(student.name)==0)
            this.students.set(student.name,"good day")
          else
            this.students.set(student.name,"bad day")
        }
      }
    )

  }
  getVowels(str:string) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }

  protected readonly name = name;
}
