import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        component: AdminComponent,
       children:[
        { path:'', redirectTo:'admin-dashboard',pathMatch:'full'
        },
        {path:"admin-dashboard",component:DashboardComponent,}
       ]
    }
    
]
