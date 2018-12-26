import { Component, OnInit } from '@angular/core';
import { ClothingVendor } from '../_model/ClothingVendor';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Clothing } from '../_model/Clothing';
import { Vendor } from '../_model/Vendor';

@Component({
  selector: 'app-new-clothingvendor',
  templateUrl: './new-clothingvendor.component.html',
  styleUrls: ['./new-clothingvendor.component.css']
})
export class NewClothingVendorComponent implements OnInit {
	newClothingVendorForm : FormGroup;
	currentClothing:Clothing;
	currentVendor:Vendor;
	constructor(private service: ApiService, private router: Router, private builder: FormBuilder) { /*private service: HttpItemService*/
		this.currentClothing =this.service.getCurrentClothing();
		this.currentVendor = this.service.getCurrentVendor();
		this.newClothingVendorForm = builder.group(new ClothingVendor(0,this.currentClothing.id,this.currentClothing.price,this.currentClothing.stockUnit,this.currentVendor.id)); 
	}

	ngOnInit() {
	}

	onSubmit(): void {

		var price = this.newClothingVendorForm.get('price').value;
		var unit = this.newClothingVendorForm.get('unit').value;
		var clothingId = this.newClothingVendorForm.get('clothingId').value;
		var verdorId = this.newClothingVendorForm.get('vendorId').value;
		this.addClothingVendor(new ClothingVendor(0,clothingId,price,unit,verdorId));
	} 

	addClothingVendor(clothingVendor: ClothingVendor) {
		console.log(clothingVendor);
		this.service.addClothingVendor(clothingVendor)
			.then(() => {console.log("routing");this.router.navigateByUrl('/items')})
			.catch(err => console.log(err));
	}

}

