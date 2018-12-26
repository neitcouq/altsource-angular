import { Injectable } from '@angular/core';
import { Item } from '../_model/Item';
import { Clothing } from '../_model/Clothing';
import { ClothingVendor } from '../_model/ClothingVendor';
import { Vendor } from '../_model/Vendor';
import { HttpClient } from '@angular/common/http';
import { AbstractItemsService } from '../_services/items/abstract-items.service';
import { HttpsItemsService } from '../_services/items/https-items.service';
import { AuthService } from '../_services/auth/auth.service';
import {AbstractClothingService} from '../_services/clothing/abstract-clothing.service';
import {HttpClothingService} from '../_services/clothing/http-clothing.service';
import {AbstractVendorService} from '../_services/vendor/abstract-vendor.service';
import {HttpVendorService} from '../_services/vendor/http-vendor.service';
import {AbstractClothingVendorService} from '../_services/clothingvendor/abstract-clothingvendor.service';
import {HttpClothingVendorService} from '../_services/clothingvendor/http-clothingvendor.service';
import {AbstractClothingRetailService} from '../_services/clothingretail/abstract-clothingretail.service';
import {HttpClothingRetailService} from '../_services/clothingretail/http-clothingretail.service';
import { ClothingRetail } from '../_model/ClothingRetail';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

	itemsStrategy: AbstractItemsService;
	clothingService: AbstractClothingService;
	vendorService: AbstractVendorService;
	clothingVendorService:AbstractClothingVendorService;
	clothingRetailService:AbstractClothingRetailService;

	constructor(http: HttpClient, auth: AuthService) { 
		
		this.itemsStrategy = new HttpsItemsService(http, auth); //MockItemsService
		this.clothingService = new HttpClothingService(http);
		this.vendorService = new HttpVendorService(http);
		this.clothingVendorService = new HttpClothingVendorService(http);
		this.clothingRetailService = new HttpClothingRetailService(http);
	}

	//Clothings
	getClothings(): Promise<Clothing[]> {
		return this.clothingService.getClothings();
	};

	addClothing(clothing: Clothing): Promise<Object>{
		return this.clothingService.addClothing(clothing);
	};

	getCurrentClothing(): Clothing {
		return this.clothingService.getCurrentClothing();
	};
	setCurrentClothing(clothing: Clothing) {
		this.clothingService.setCurrentClothing(clothing);
	};


	//Vendors
	getVendors(): Promise<Vendor[]> {
		return this.vendorService.getVendors();
	};

	addVendor(vendor: Vendor): Promise<Object>{
		return this.vendorService.addVendor(vendor);
	};

	getCurrentVendor(): Vendor {
		return this.vendorService.getCurrentVendor();
	};
	setCurrentVendor(vendor: Vendor) {
		this.vendorService.setCurrentVendor(vendor);
	};

	//Clothing vendors
	getCurrentClothingVendor(): ClothingVendor {
		return this.clothingVendorService.getCurrentClothingVendor();
	};
	setCurrentClothingVendor(clothingVendor: ClothingVendor) {
		this.clothingVendorService.setCurrentClothingVendor(clothingVendor);
	};

	getClothingVendors(): Promise<ClothingVendor[]> {
		return this.clothingVendorService.getClothingVendors();
	};

	addClothingVendor(clothingVendor: ClothingVendor): Promise<Object>{
		return this.clothingVendorService.addClothingVendor(clothingVendor);
	};

	//Clothing retails
	getCurrentClothingRetail(): ClothingRetail {
		return this.clothingRetailService.getCurrentClothingRetail();
	};
	setCurrentClothingRetail(clothingRetail: ClothingRetail) {
		this.clothingRetailService.setCurrentClothingRetail(clothingRetail);
	};

	getClothingRetails(): Promise<ClothingRetail[]> {
		return this.clothingRetailService.getClothingRetails();
	};

	addClothingRetail(clothingRetail: ClothingRetail): Promise<Object>{
		return this.clothingRetailService.addClothingRetail(clothingRetail);
	};

	//Items
	getCurrentItem(): Item {
		return this.itemsStrategy.getCurrentItem();
	};
	setCurrentItem(item: Item) {
		this.itemsStrategy.setCurrentItem(item);
	};
	getItems(): Promise<Item[]> {
		return this.itemsStrategy.getItems();
	};
	removeItem(item: Item): Promise<Object> {
		return this.itemsStrategy.removeItem(item);
	};
	addItem(item: Item): Promise<Object>{
		return this.itemsStrategy.addItem(item);
	};
	updateItem(item: Item): Promise<Object>{
		return this.itemsStrategy.updateItem(item);
	};
}
