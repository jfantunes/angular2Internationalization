import { Text1Component } from './text1.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: Text1Component },
];

export const Text1RoutingModule = RouterModule.forChild(routes);