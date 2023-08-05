import { Component } from '@angular/core';

type ProductType = {
  nombre:string,
  costo:number,
};


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {

productos: ProductType[] = [{ nombre: 'Python-Basic', costo: 135451 }, {nombre: 'C-Basic', costo:23544}, {nombre:'JavaScript', costo:13548}, { nombre: 'Web-design', costo: 132453 }, { nombre: 'Graphic-Design', costo: 11223 }, { nombre: 'Java-Basics', costo: 12313 }];
  
showList: boolean = false;

showTheList() {
  this.showList = !this.showList;
}

}
