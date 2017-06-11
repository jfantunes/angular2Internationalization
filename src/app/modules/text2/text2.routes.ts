import { Text2Component } from './text2.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: Text2Component }
];

export const Text2RoutingModule = RouterModule.forChild(routes);