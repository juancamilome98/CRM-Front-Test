import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClientModel } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-speech-enviar-bill',
  templateUrl: './speech-enviar-bill.component.html',
  styleUrls: ['./speech-enviar-bill.component.css']
})
export class SpeechEnviarBillComponent implements OnInit {
  cliente$: Partial<ClientModel>;

  constructor(private httpSer: AuthService, private title: Title)
  {
    title.setTitle('ENVIAR BILL')
  }

  ngOnInit(): void {
    this.httpSer.dataClienteE$.subscribe(r => this.cliente$ = r);
  }

}
