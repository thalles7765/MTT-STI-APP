import { CommonModule } from '@angular/common';
// import { ThemeModule, lightTheme, darkTheme } from './theme';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { CarouselModule } from 'primeng/carousel';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';

export const AppImports = [
  CommonModule, 
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  ProgressBarModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatTabsModule,
  ProgressSpinnerModule,
  InputSwitchModule,
  MatDividerModule,
  MatMenuModule,
  AvatarModule,
  TagModule,
  SidebarModule,
  ButtonModule,
  SelectButtonModule,
  MatStepperModule,
  MatTooltipModule,
  BadgeModule,
  DialogModule,
  DividerModule,
  ChipModule,
  ContextMenuModule,
  InputTextModule,
  InputNumberModule,
  DynamicDialogModule,
  TableModule,
  RadioButtonModule,
  SplitButtonModule,
  SpeedDialModule,
  MultiSelectModule,
  // ThemeModule,
];


// ToastrModule.forRoot({
//   timeOut: 1000,
//   progressBar: true,
//   progressAnimation: 'increasing',
//   preventDuplicates: true,
// }),