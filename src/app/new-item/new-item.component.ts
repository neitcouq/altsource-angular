import { Component, OnInit } from '@angular/core';
import { Clothing } from '../_model/Clothing';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  newItemForm : FormGroup;
	types = [
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
	  
	constructor(private service: ApiService, private router: Router, builder: FormBuilder) { /*private service: HttpItemService*/

		this.newItemForm = builder.group(new Clothing(0,0,0,0,0,0)); 
	}

	ngOnInit() {
	}

	onSubmit(): void {
		var type = this.newItemForm.get('type').value;
		var size = this.newItemForm.get('size').value;
		var color = this.newItemForm.get('color').value;
		var price = this.newItemForm.get('price').value;
		var stockUnit = this.newItemForm.get('stockUnit').value;
		this.addClothing(new Clothing(0,type,size,color,price,stockUnit));
	} 

	addClothing(clothing: Clothing) {
		console.log(clothing);
		this.service.addClothing(clothing)
			.then(() => {console.log("routing");this.router.navigateByUrl('/items')})
			.catch(err => console.log(err));
	}

}
