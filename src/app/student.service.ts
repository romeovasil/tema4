import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url="http://localhost:8080/api/students";
  constructor(private http: HttpClient) { }

  getStudents():Observable<Student[]>{
      return this.http.get<GetResponseStudent>(this.url).pipe(map(response=>response._embedded.students));
  }
}


interface GetResponseStudent {
  _embedded: {
    students: Student[];
  }
}
