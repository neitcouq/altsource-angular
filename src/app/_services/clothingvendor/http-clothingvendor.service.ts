import { Injectable } from '@angular/core';
import { ClothingVendor as ClothingVendor } from '../../_model/ClothingVendor';
import { HttpClient } from '@angular/common/http';
import { AbstractClothingVendorService } from './abstract-clothingvendor.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpClothingVendorService extends AbstractClothingVendorService {

	clothingVendors: ClothingVendor[];
	url: string; // e.g. "http://localhost:3000/api/Clothing";

	constructor(protected http: HttpClient){
		super();
		this.url = environment.backendUrl + "/api/ClothingVendor";
	}

	getClothingVendors(): Promise<ClothingVendor[]> {
		return new Promise((resolve) => {

			this.http.get<ClothingVendor[]>(this.url).subscribe(response => {

                  var clothingVendors = response.map((clothingVendor) => new ClothingVendor(clothingVendor.id, clothingVendor.clothingId,clothingVendor.price
                                                                        ,clothingVendor.unit,clothingVendor.vendorId));
			  	resolve(clothingVendors);
			});
		});
    };
    
	addClothingVendor(clothingVendor: ClothingVendor): Promise<Object> {

		return this.http.put(this.url, clothingVendor).toPromise();
	};
}