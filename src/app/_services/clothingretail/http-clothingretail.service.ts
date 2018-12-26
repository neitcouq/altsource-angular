import { Injectable } from '@angular/core';
import { ClothingRetail as ClothingRetail } from '../../_model/ClothingRetail';
import { HttpClient } from '@angular/common/http';
import { AbstractClothingRetailService } from './abstract-clothingretail.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpClothingRetailService extends AbstractClothingRetailService {

	clothingRetails: ClothingRetail[];
	url: string; // e.g. "http://localhost:3000/api/Clothing";

	constructor(protected http: HttpClient){
		super();
		this.url = environment.backendUrl + "/api/ClothingRetail";
	}

	getClothingRetails(): Promise<ClothingRetail[]> {
		return new Promise((resolve) => {

			this.http.get<ClothingRetail[]>(this.url).subscribe(response => {

                  var clothingRetails = response.map((clothingRetail) => new ClothingRetail(clothingRetail.id
                                                                        , clothingRetail.clothingVendorId
                                                                        ,clothingRetail.price
                                                                        ,clothingRetail.vendorId));
			  	resolve(clothingRetails);
			});
		});
    };
    
	addClothingRetail(clothingRetail: ClothingRetail): Promise<Object> {

		return this.http.put(this.url, clothingRetail).toPromise();
	};
}