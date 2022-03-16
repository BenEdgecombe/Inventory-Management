import { NgModule } from '@angular/core';
import { InventoryListComponent } from './inventory-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convertToSpaces.pipes';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InventoryListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path : "inventory", component: InventoryListComponent},
      { path : "inventory/:id", canActivate: [ProductDetailGuard], component: ProductDetailComponent}
    ]),
    SharedModule
  ]
})
export class InventoryModule { }
