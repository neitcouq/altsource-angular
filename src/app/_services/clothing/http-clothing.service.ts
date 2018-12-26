import { Injectable } from '@angular/core';
import { Clothing } from '../../_model/Clothing';
import { HttpClient } from '@angular/common/http';
import { AbstractClothingService } from './abstract-clothing.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpClothingService extends AbstractClothingService {

	clothings: Clothing[];
	url: string; // e.g. "http://localhost:3000/api/Clothing";

	constructor(protected http: HttpClient){
		super();
		this.url = environment.backendUrl + "/api/Clothing";
	}

	getClothings(): Promise<Clothing[]> {
		return new Promise((resolve) => {

			this.http.get<Clothing[]>(this.url).subscribe(response => {

			  	var clothings = response.map((clothing) => new Clothing(clothing.id,clothing.type, clothing.size,clothing.color,clothing.price,clothing.stockUnit));
			  	resolve(clothings);
			});
		});
    };
    
	addClothing(clothing: Clothing): Promise<Object> {

		return this.http.put(this.url, clothing).toPromise();
	};
}