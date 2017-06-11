import { Routes, RouterModule } from '@angular/router';

const TextModule1 = 'app/modules/text1/text1.module#Text1Module';
const TextModule2 = 'app/modules/text2/text2.module#Text2Module';

const routes: Routes = [
    { path: '', redirectTo: 'text1', pathMatch: 'full' },
    { path: 'text1', loadChildren: TextModule1 },
    { path: 'text2', loadChildren: TextModule2 },
    { path: '**', redirectTo: 'text1' },
];

export const MainRoutingModule = RouterModule.forRoot(routes);
