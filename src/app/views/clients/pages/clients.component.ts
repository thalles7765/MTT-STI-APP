import { Component, inject } from '@angular/core';
import { AppImports } from '../../../app.imports';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: AppImports,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  private clientSvc = inject(ClientsService);
  clients!: any[];
  selectedClients!: any;

  ngOnInit() {
    this.clientSvc.getData().then((data) => {
      if (data.data.length) {
        this.clients = data.data;
      }
    });
  }

}
