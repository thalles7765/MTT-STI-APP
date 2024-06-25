import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductsComponent } from './views/products/pages/products/products.component';
import { ClientsComponent } from './views/clients/pages/clients.component';
import { ProductsCategoriesComponent } from './views/products/pages/categories/products-categories.component';
import { LogComponent } from './views/logs/pages/log.component';
import { SettingsComponent } from './views/settings/pages/settings.component';
import { SupportComponent } from './views/support/pages/support.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'categories', component: ProductsCategoriesComponent },
    { path: 'clients', title: 'Motter - Clientes', component: ClientsComponent },
    { path: 'products', title: 'Motter - Produtos', component: ProductsComponent },
    { path: 'products/categories', title: 'Motter - Produtos Categorias', component: ProductsCategoriesComponent },
    { path: 'logs', title: 'Motter - Logs', component: LogComponent },
    { path: 'support', title: 'Motter - Suporte', component: SupportComponent },
    { path: 'settings', title: 'Motter - Configurações', component: SettingsComponent },

    // { path: 'products', component: ProductsComponent, children: [{ path: 'categories', title: 'Motter - Categorias de Produtos', component: ProductsCategoriesComponent }] },
];
