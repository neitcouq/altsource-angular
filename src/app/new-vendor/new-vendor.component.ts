import { Component, OnInit } from '@angular/core';
import { Vendor } from '../_model/Vendor';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-vendor',
  templateUrl: './new-vendor.compoment.html',
  styleUrls: ['./new-vendor.component.css']
})
export class NewVendorComponent implements OnInit {
    newVendorForm : FormGroup;
	constructor(private service: ApiService, private router: Router, private builder: FormBuilder) { /*private service: HttpItemService*/

		this.newVendorForm = builder.group(new Vendor(0,"")); 
	}

	ngOnInit() {
	}

	onSubmit(): void {
		var name = this.newVendorForm.get('name').value;
		this.addVendor(new Vendor(0, name));
	} 

	addVendor(vendor: Vendor) {
		console.log(vendor);
		this.service.addVendor(vendor)
			.then(() => {console.log("routing");this.router.navigateByUrl('/items')})
			.catch(err => console.log(err));
	}
}
