( function () {
  "use strict";

  angular.module("ShoppingListApp", [])
  .controller("itemstoBuy", itemstoBuy)
  .controller("itemsBought", itemsBought)
  .service("ShoppingListService", ShoppingListService);

  itemstoBuy.$inject = ["ShoppingListService"];
  function itemstoBuy(ShoppingListService) {
    var shopList = this;
    shopList.itemName = "";
    shopList.itemQuantity = "";
    shopList.toBuyMessage = "Everything is bought";

    shopList.removeItem = function (itemname, itemquantity, itemIndex) {
      ShoppingListService.removeItem(itemname, itemquantity, itemIndex);

    }
    shopList.items = ShoppingListService.getItems();
  };

  itemsBought.$inject = ["ShoppingListService"];
  function itemsBought(ShoppingListService) {
    var bought = this;
    bought.boughtMessage = "Nothing bought yet!";
    bought.alreadyBought = ShoppingListService.showItems();

  }

  function ShoppingListService() {
    var service = this;
    var counter = 0;
    var buyItems = [
      {
        name: "Cookies",
        quantity: 2
      },
      {
        name: "Bananas",
        quantity: 12
      },
      {
        name: "Mangoes",
        quantity: 20
      },
      {
        name: "Chocolates",
        quantity: 5
      }

    ];
    var boughtItems = [];


    service.getItems= function () {

      return buyItems;
    }

    service.showItems = function () {
      return boughtItems;
    }

    service.removeItem = function (itemname, itemquantity, itemIndex) {
      var item = {
        name: itemname,
        quantity: itemquantity
      };

      boughtItems.push(item);
      buyItems.splice(itemIndex, 1);
      return buyItems.length;
    }



  }



})();
