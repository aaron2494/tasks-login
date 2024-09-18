import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

export interface Task{
  id: string;
  title:string;
  completed:boolean;
}

export type TaskCreate = Omit<Task,"id">;

const PATH="tasks"

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 private _firestore=inject(Firestore);

 private _collection= collection(this._firestore,PATH);


 create(task:TaskCreate){
  console.log(task); // Verifica los datos antes de enviarlos
  return addDoc(this._collection,task)
 }
}
