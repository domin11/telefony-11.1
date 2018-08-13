"use strict"
function Phone(brand, price, color, ram, battery) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.ram = ram;
  this.battery = battery;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ". The phone has " + this.ram + " GB of RAM and " + this.battery + " mAh battery.");
}

var iPhoneSE = new Phone("Apple", 1400, "space grey", 2, 1642);
var samsungGalaxyS9 = new Phone("Samsung", 3500, "midnight black", 4, 3000);
var xiaomiMi8 = new Phone("Xiaomi", 2400, "black", 6, 3400);

iPhoneSE.printInfo();
samsungGalaxyS9.printInfo();
xiaomiMi8.printInfo();
