import { Routes } from "@angular/router"

export default [
    { 
        path:"",
        loadComponent:() => import("./features/task-list/task-list.component")
     },
     {
        path:"new",
        loadComponent:() => import("./features/task-form/task-form.component")
     },
     {
        path:"edit/:id",
        loadComponent:() => import("./features/task-form/task-form.component")
     },
] as Routes