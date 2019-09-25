import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Body } from '@angular/http/src/body';
import {map, catchError} from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http : Http) { }

  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return myHeaders; 
  }

  public obtenerProductos(): Observable<any> {
    //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
   const url='http://localhost:3000/'

    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {        
        return response.json();
      }), pipe(catchError(this.handleError)))
  }

  private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return Observable.throw(json);
  }

  autenticarService(data: string){
    this.http.get('http://localhost:3000/propietario').subscribe(data => {
    console.log('metodo en uso ' + data)
    
    }

       
    )}
}
