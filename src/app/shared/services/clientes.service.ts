import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api = `${environment.api}`
  constructor(private httpCliente: HttpClient) { }

  listar() : Observable<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(this.api)
  }

}
