import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from 'src/Modals/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) {}
  private apiUrl = '/api/employees'; // Using In-Memory DataBase

  getAllEmployees(): Observable<employee[]>{
    return this.http.get<employee[]>(this.apiUrl);
  }

  getEmployee(id: number): Observable<employee> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<employee>(url);
  }

  addEmployee(employee: employee): Observable<employee> {
    return this.http.post<employee>(this.apiUrl, employee);
  }

  updateEmployee(employee: employee): Observable<employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    console.log(`Url ${url}`);
    return this.http.put<employee>(url, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
