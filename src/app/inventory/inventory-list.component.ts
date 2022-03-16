import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { InventoryService } from "./inventory.service";
import { IProduct } from "./product";

@Component({
    templateUrl: "./inventory-list.component.html",
    styleUrls: ["./inventory-list.component.css"]
})

export class InventoryListComponent implements OnInit, OnDestroy{
    pageTitle: string = "Inventory List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = "";
    sub!: Subscription;
    
    private _listFilter: string = "";

    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this.filteredInventory = this.performFilter(value);
    }

    filteredInventory: IProduct[] = [];

    inventory: IProduct[] = [];

    constructor(private inventoryService: InventoryService) {}

    toggleImage(): void
    {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.inventory.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy) 
        || product.productOwner.toLocaleLowerCase().includes(filterBy) 
        || product.department.toLocaleLowerCase().includes(filterBy) 
        || product.company.toLocaleLowerCase().includes(filterBy) );
    } 

    onConditionClicked(message:string): void 
    {
        //this.pageTitle = message;
    }

    ngOnInit(): void {
        this.sub = this.inventoryService.getProducts().subscribe({
            next: inventory => {this.inventory = inventory;this.filteredInventory = this.inventory;},
            error: err => this.errorMessage = err
        });
        
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}