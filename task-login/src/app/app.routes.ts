import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:"auth",
        loadChildren:() => import("./auth/features/auth.routes")
    },
 {
    path:"task",
    loadChildren:()=> import("./task/task.routes")
 },
 {
    path:"**",
    redirectTo:"/task"
 }
];
