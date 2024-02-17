import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { CarItemsComponent } from './components/car-items/car-items.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: TableDataComponent },
      { path: 'car-item/:id', component: CarItemsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
