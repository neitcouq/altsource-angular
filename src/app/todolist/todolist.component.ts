import { Component, OnInit } from '@angular/core';
import { Clothing } from '../_model/Clothing';
import {Vendor} from '../_model/Vendor'
import {ClothingVendor} from '../_model/ClothingVendor'
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { ClothingRetail } from '../_model/ClothingRetail';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

	clothings : Clothing[];
	vendors: Vendor[];
	clothingvendors: ClothingVendor[];
	clothingRetails:ClothingRetail[];
	static instance: TodolistComponent;
	
	types =  [
		{id: 1, name: 'T-Shirt'},
		{id: 2, name: 'Dress-Shirt'},
		{id: 3, name: 'Suits'},
	  ];
	
	sizes = [
		{id: 1, name: 'S'},
		{id: 2, name: 'M'},
		{id: 3, name: 'L'},
	  ];

	colors =[
		{id: 1, name: 'Red'},
		{id: 2, name: 'Blue'},
		{id: 3, name: 'Green'},
      ];
      
	getTypeName(id:Number)
	{
		for(let item of this.types)
			if(item.id == id)
					return item.name;
	}

	getSizeName(id:Number)
	{
		for(let item of this.sizes)
			if(item.id == id)
					return item.name;
	}

	getColorName(id:Number)
	{
		for(let item of this.colors)
			if(item.id == id)
					return item.name;
	}
	
	constructor(private service: ApiService, private router: Router) { /*private service: HttpItemService*/

		this.updateLocalItems();
		this.updateLocalVendor();
		this.updateLocalClothingVendor();
		this.updateLocalClothingRetail();
	}

	updateLocalItems(){
		console.log("Updating items");
		this.service.getClothings().then(clothings => {
			clothings.forEach(element => {
				element.typeName = this.getTypeName(element.type);
				element.colorName = this.getColorName(element.color);
				element.sizeName = this.getSizeName(element.size);
				
			});
			this.clothings = clothings;
		});
	}

	updateLocalVendor(){
		console.log("Updating vendors");
		this.service.getVendors().then(vendors =>{
			this.vendors = vendors;
			//Set the last vendors as current vendor
			if(this.vendors.length > 0)
				this.service.setCurrentVendor(this.vendors[this.vendors.length-1])
		})
	}

	updateLocalClothingVendor(){
		console.log("Updating clothing vendors");
		this.service.getClothingVendors().then(clothingVendors =>{
			this.clothingvendors = clothingVendors;
		})
	}

	updateLocalClothingRetail(){
		console.log("Updating clothing retails");
		this.service.getClothingRetails().then(clothingRetails =>{
			this.clothingRetails = clothingRetails;
		})
	}

  	ngOnInit() {}

  	onRemove(){
		//this.service.removeItem(clothing).then(() => this.updateLocalItems());
	}

	onBuy(clothing: Clothing){
		var currentVendor = this.service.getCurrentVendor();
		if(currentVendor != null)
		{
			this.service.setCurrentClothing(clothing);
			this.router.navigateByUrl("/new-clothingvendor");
		}
	}

	onSell(clothingVendor:ClothingVendor)
	{
		this.service.setCurrentClothingVendor(clothingVendor);
		this.router.navigateByUrl("/new-clothingretail");
	}

	onSetCurrentVendor(vendor:Vendor)
	{
		this.service.setCurrentVendor(vendor);
	}
}
