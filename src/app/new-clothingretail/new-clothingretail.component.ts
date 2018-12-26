import { Component, OnInit } from '@angular/core';
import { ClothingRetail } from '../_model/ClothingRetail';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Clothing } from '../_model/Clothing';
import { ClothingVendor } from '../_model/ClothingVendor';

@Component({
  selector: 'app-new-clothingretail',
  templateUrl: './new-clothingretail.component.html',
  styleUrls: ['./new-clothingretail.component.css']
})
export class NewClothingRetailComponent implements OnInit {
	newClothingRetailForm : FormGroup;
	currentClothingVendor:ClothingVendor;
	constructor(private service: ApiService, private router: Router, private builder: FormBuilder) { /*private service: HttpItemService*/
		this.currentClothingVendor =this.service.getCurrentClothingVendor();
        this.newClothingRetailForm = builder.group(new ClothingRetail(0,this.currentClothingVendor.id
                                ,this.currentClothingVendor.price
                                ,this.currentClothingVendor.vendorId)); 
	}

	ngOnInit() {
	}

	onSubmit(): void {
		var price = this.newClothingRetailForm.get('price').value;
		var clothingVendorId = this.newClothingRetailForm.get('clothingVendorId').value;
		var verdorId = this.newClothingRetailForm.get('vendorId').value;
		this.addClothingRetail(new ClothingRetail(0,clothingVendorId,price,verdorId));
	} 

	addClothingRetail(clothingRetail: ClothingRetail) {
		console.log(clothingRetail);
		this.service.addClothingRetail(clothingRetail)
			.then(() => {console.log("routing");this.router.navigateByUrl('/items')})
			.catch(err => console.log(err));
	}

}

