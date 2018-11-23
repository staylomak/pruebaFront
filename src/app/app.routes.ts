import { Routes } from '@angular/router';
import { AddSayayinComponent } from './components/add-sayayin/add-sayayin.component';
import { EditSayayinComponent } from './components/edit-sayayin/edit-sayayin.component';
import { ListSayayinComponent } from './components/list-sayayin/list-sayayin.component';

export const ROUTES: Routes = [
    { path: 'add-sayayin', component: AddSayayinComponent },
    { path: 'edit-sayayin', component: EditSayayinComponent },
    { path: 'list-sayayin', component: ListSayayinComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-sayayin' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-sayayin' }
];