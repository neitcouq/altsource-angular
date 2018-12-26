import { Injectable } from '@angular/core';
import { Vendor } from '../../_model/Vendor';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {AbstractVendorService} from './abstract-vendor.service'

@Injectable({
  providedIn: 'root'
})

export class HttpVendorService extends AbstractVendorService {

	vendors: Vendor[];
	url: string; // e.g. "http://localhost:3000/api/Clothing";

	constructor(protected http: HttpClient){
		super();
		this.url = environment.backendUrl + "/api/Vendor";
	}

	getVendors(): Promise<Vendor[]> {
		return new Promise((resolve) => {

			this.http.get<Vendor[]>(this.url).subscribe(response => {

			  	var vendors = response.map((vendor) => new Vendor(vendor.id, vendor.name));
			  	resolve(vendors);
			});
		});
    };
    
	addVendor(vendor: Vendor): Promise<Object> {
		return this.http.put(this.url, vendor).toPromise();
	};
}