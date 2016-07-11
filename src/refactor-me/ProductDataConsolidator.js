var GOODS = [];
GOODS['LawnMower'] = new LawnmowerRepository().getAll();
GOODS['PhoneCase'] = new PhoneCaseRepository().getAll();
GOODS['TShirt'] = new TShirtRepository().getAll();

var CURRENCY = [];
CURRENCY['nzd'] = 1;
CURRENCY['usd'] = 0.76;
CURRENCY['euro'] = 0.67;

Number.prototype.showIn = function (mark) {
    var val = this;
    if (CURRENCY[mark]) {
        return (val * CURRENCY[mark]).toFixed(2);
    } else
    return val.toFixed(2);
};

var ProductDataConsolidator = function() {
    var set = [];
    this.products = set;
};

ProductDataConsolidator.prototype.unique = function (obj) {
    var check = this.products;
    for (var i = 0; i < check.length; i++) {
        if (check[i].id === obj.id && check[i].name === obj.name) return false;
    }
    return true;
};

ProductDataConsolidator.prototype.fill = function (cat) {
    var list = GOODS[cat] || [];    
    for (var key in list) {
        if (this.unique(list[key]))
        this.products.push({
			id: list[key].id,
			name: list[key].name,
			price: list[key].price,
			type: cat
		});
    }
};

ProductDataConsolidator.prototype.fillAll = function () {
    for (var key in GOODS) {
        this.fill(key);
    }
};

ProductDataConsolidator.prototype.get = function () {
    return this.products;
};