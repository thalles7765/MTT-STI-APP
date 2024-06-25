import { Component, inject } from '@angular/core';
import { AppImports } from '../../../app.imports';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: AppImports,
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
  private logsSvc = inject(LogService);
  logs!: any[];
}
