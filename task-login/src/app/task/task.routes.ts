import { Routes } from "@angular/router"

export default [
    { 
        path:"",
        loadComponent:() => import("./features/task-list/task-list.component")
     }
] as Routes