import { Component } from '@angular/core';
/*mi customType*/
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
/*agregando productos*/
productos: ProductType[] = [{ nombre: 'Python-Basic', costo: 135451 }, {nombre: 'C-Basic', costo:23544}, {nombre:'JavaScript', costo:13548}, { nombre: 'Web-design', costo: 132453 }, { nombre: 'Graphic-Design', costo: 11223 }, { nombre: 'Java-Basics', costo: 12313 }];
/*la lista esta oculta*/  
showList: boolean = false;
/*cuando llame a esta funcion showList 
cambiará de estado a true y se mostrará la lista*/
showTheList() {
  this.showList = !this.showList;
}

}
