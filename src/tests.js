
QUnit.test( "Products Listing", function( assert ) {
    var list1 = new ProductDataConsolidator();
    assert.expect(12);
    list1.fill('LawnMower');
    var dataList1 = list1.get();
    assert.equal(dataList1.length, 3, 'Listing has 3 items in it - Lawnmowers');
    list1.fill('TShirt');
    assert.equal(dataList1.length, 6, 'Listing has 6 items in it - same + Tshirts');
    list1.fill('TShirt');
    assert.equal(dataList1.length, 6, 'Tried to add Tshirts one more time, listing still has 6 items in it');
    list1.fillAll();
    assert.equal(dataList1.length, 8, 'Filled everything, listing now has 8 items in it');
    list1.fill('Roller');
    assert.equal(dataList1.length, 8, 'Tried to add unexisted category, listing still has 8 items in it');
    assert.equal(dataList1[0].name, 'Hewlett-Packard Rideable Lawnmower', '1st item in a default listing should be Hewlett-Packard Rideable Lawnmower');
    assert.equal(dataList1[0].price.showIn('nzd'), 3000, 'Its price in nzd equal to 3000');
    assert.equal(dataList1[0].price.showIn('euro'), 2010, 'Its price in euro equal to 2010');
    
    var list2 = new ProductDataConsolidator();
    list2.fill('PhoneCase');
    var dataList2 = list2.get();
    assert.equal(dataList2.length, 2, 'New listing with only Cases - 2 items');
    assert.equal(dataList2[0].name, 'Amazon Fire Burgundy Phone Case', '1st item in a new listing is Amazon Fire Burgundy Phone Case');
    assert.equal(dataList2[0].price.showIn('nzd'), 14, 'Its price in nzd equal to 14');
    assert.equal(dataList2[0].price.showIn('usd'), 10.64, 'Its price in usd equal to 10.64');
});