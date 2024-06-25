import { Component, inject } from '@angular/core';
import { AppImports } from '../../../app.imports';
import { SettingsService } from '../../../services/settings.service';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [AppImports, TabViewModule, PanelModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  private settingSvc = inject(SettingsService);
  settings!: any[];
  databases: any[] = [];
  formDatabase: FormGroup;

  ngOnInit() {
    this.formDatabase = new FormGroup({
      connection: new FormControl('1', Validators.required),
      host: new FormControl('192.168.0.1', Validators.required),
      port: new FormControl('3050', Validators.required),
      database: new FormControl('C:/TGA/Dados.FDB', Validators.required),
      user: new FormControl('sysdba', Validators.required),
      password: new FormControl('masterkey', Validators.required)
    })
  }

  saveConnection(form: FormGroup) {
    console.log(form.value);
    this.databases.push(form.value);
    // form.reset();
    // console.log(form.value)
  }
}
