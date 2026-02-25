import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud');
  x: Array<any> = []

  constructor(){
    this.generateRandomUsers(10)
  }

  private generateRandomUsers(count: number){
    const sampleNames = ['Alice','Bob','Carol','Dave','Eve','Frank','Grace','Heidi','Ivan','Judy','Mallory','Niaj']
    for(let i=1;i<=count;i++){
      const name = sampleNames[Math.floor(Math.random()*sampleNames.length)]
      const age = Math.floor(Math.random()*43)+18 // 18-60
      this.x.push({id:i, name, age})
    }
  }

  deleteUser(id: any){
    const idNum = Number(id)
    this.x = this.x.filter(u => u.id !== idNum)
  }
  editUser(id: any, name: string, age: any){
    const idNum = Number(id)
    const u = this.x.find(u => u.id === idNum)
    if(!u) return
    if(name && name.trim()!=='') u.name = name
    if(age !== undefined && age !== null && String(age).trim()!=='') u.age = Number(age)
  }
addUser(id:any,name:string,age:any){
  this.x.push({id,name,age})
}
x1=Math.floor(Math.random()*43)+18

}
