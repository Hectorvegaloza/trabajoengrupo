import { Routes } from '@angular/router';
import { HijoComponent } from './Component/hijo/hijo.component';
import { PadreComponent } from './Component/padre/padre.component';

export const routes: Routes = [
    {path: "hijo", component:HijoComponent},
    {path: "padre", component:PadreComponent}
];
