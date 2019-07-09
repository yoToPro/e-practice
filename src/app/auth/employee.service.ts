import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url: string = 'http://localhost:3000/'
  constructor(
    public httpClient: HttpClient
  ) { }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.url + 'api/Employee-master', employee)
  }
}
