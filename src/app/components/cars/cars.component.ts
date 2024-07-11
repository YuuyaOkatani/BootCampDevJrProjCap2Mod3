import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car: Car = {} as Car; 
  idCount: number = 0; 
  isUpdate: Boolean = false; 


  cars: Car[] = [
    {
      id: 1,
      name: 'Civic',
      automaker: 'Honda',
      price: 90000,
      year: 2022
    },
    {
      id: 2,
      name: 'Corolla',
      automaker: 'Toyota',
      price: 95000,
      year: 2022
    },
    {
      id: 3,
      name: 'Model S',
      automaker: 'Tesla',
      price: 350000,
      year: 2023
    },
    {
      id: 4,
      name: 'Mustang',
      automaker: 'Ford',
      price: 270000,
      year: 2021
    },
    {
      id: 5,
      name: 'Onix',
      automaker: 'Chevrolet',
      price: 60000,
      year: 2020
    }
  ];

  salvarCar(){
    if(!this.isUpdate){
      this.car.id = this.idCount; 
      this.idCount++;
      this.cars.push(this.car);

    }
    else{
      this.isUpdate? this.car = {} as Car:''; 
      
    }

    this.car = {} as Car;
    this.isUpdate = false;


  }
  updateCar(car: Car){
    this.car = car;
    this.isUpdate = true;

  }

  removeCar(car:Car){
    this.car = car; 
    this.cars = this.cars.filter(c => c.id!== this.car.id);


  }





  

}
