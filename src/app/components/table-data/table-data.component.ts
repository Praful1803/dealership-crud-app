import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit{

  Form!: FormGroup;

  data: any[] = [];

  search: string = '';

  constructor(private service: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.getDealersData();
    this.createForm();
  }

  createForm(){
    this.Form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      lan: new FormControl('', Validators.required),
      long: new FormControl('', Validators.required),
      totalBudget: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
  }

  getDealersData(){
    this.service.getDealers().subscribe((res: any) => {
      console.log(res);
      this.data = res;
    })
  }

  navigate(dealer: any){
    this.router.navigate(['/car-item',dealer.id], { state: { dealer } });
  }

  onSubmit(){
    debugger
    if (this.Form.valid) {
      const formData = this.Form.value;
      if (formData.id) {
        this.updateDealer(formData);
      } else {
        this.addNewDealer(formData);
      }
    }
  }

  updateDealer(formData: any){
    this.service.updateDealers(formData.id, formData).subscribe((res) => {
      console.log('dealer updated', res);
      this.getDealersData();
      this.Form.reset();
    })
  }

  addNewDealer(formData: any){
    this.service.addDealers(formData).subscribe((res) => {
      console.log('dealer added', res);
      this.getDealersData();
      this.Form.reset();
    })
  }

  filterDealers(): void {
    if (this.search) {
      const filteredDealers = this.data.filter((dealer) =>
        dealer.name.toLowerCase().includes(this.search.toLowerCase())
      );
      this.data = filteredDealers;
    } else {
      this.getDealersData();
    }
  }

  deleteDealers(id: any){
    this.service.deleteDealers(id).subscribe((res) => {
      console.log('dealer deleted', res);
      this.getDealersData();
    })
  }

  editDealers(data: any){
    this.Form.patchValue({
      id: data.id,
      name: data.name,
      lan: data.lan,
      long: data.long,
      totalBudget: data.totalBudget,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }

}
