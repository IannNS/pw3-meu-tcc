import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroEstabelecimentoService {

  url = '//https://m8music.free.beeceptor.com';

  constructor(private httpClient : HttClient) { }

  postCadastro(): Observable<any> {
    return this.httpClient.get<>(this.url);
  }
}
