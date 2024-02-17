import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-car-items',
  templateUrl: './car-items.component.html',
  styleUrls: ['./car-items.component.scss']
})
export class CarItemsComponent implements OnInit{

  searchCar: string = '';

  carData: any[] = [];

  Form!: FormGroup;

  constructor(private route: ActivatedRoute, private service: MasterService) {}

  ngOnInit(): void {
    this.createForm();
    this.getCarData();
  }

  createForm(){
    this.Form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    debugger
    const formData = this.Form.value;
    if(formData.id){
      this.service.updateCar(formData.id, formData).subscribe((res) => {
        console.log('car data updated', res);
        this.getCarData();
        this.Form.reset();
      })
    } else {
      this.service.addCar(formData).subscribe((res) => {
        console.log('car added', res);
        this.getCarData();
        this.Form.reset();
      })
    }
  }

  getCarData(){
    this.service.getCars().subscribe((res: any) => {
      this.carData = res;
    })
  }

  filterCars(): void {
    if (this.searchCar) {
      const filteredCars = this.carData.filter((car) =>
        car.brand.toLowerCase().includes(this.searchCar.toLowerCase())
      );
      this.carData = filteredCars;
    } else {
      this.getCarData();
    }
  }

  editCar(data: any){
    this.Form.patchValue({
      id: data.id,
      name: data.name,
      model: data.model,
      brand: data.brand,
      color: data.color,
      price: data.price
    })
  }

  deleteCar(id: any){
    debugger
    this.service.deleteCar(id).subscribe((res) => {
      console.log('car deleted', res);
      this.getCarData();
    })
  }
}
