import { Injectable } from '@angular/core';
import { Vendor } from '../../_model/Vendor';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractVendorService {

  	currentVendor: Vendor;

	constructor() { }
	getCurrentVendor(): Vendor {
		return this.currentVendor;
	};
	setCurrentVendor(vendor: Vendor) {
		this.currentVendor = vendor;
	};
	abstract getVendors(): Promise<Vendor[]>;
	abstract addVendor(vendor: Vendor): Promise<Object>;
}
