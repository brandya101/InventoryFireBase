//Initiate firebase 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDISX14XLmt5eDwbZtHUbPnhVLYbfyzF1A",
    authDomain: "inventory-management-c7163.firebaseapp.com",
    databaseURL: "https://inventory-management-c7163.firebaseio.com",
    projectId: "inventory-management-c7163",
    storageBucket: "inventory-management-c7163.appspot.com",
    messagingSenderId: "211754324763"
  };
  firebase.initializeApp(config);

  var database=firebase.database();
  
  function shoeInventoryUpdate(styleNum, currentInv, SuggInv, InvShip) {
    firebase.database().ref('style/' + styleNum).set({
      Amazon_Inventory: currentInv,
      Recommended_Inventory: SuggInv,
      Shipped_Inventory: InvShip
    });
  }

//Array with images of shoes URL
//Create a for loop to fill in the image and style # 


//form is hidden to begin with
//Create a checkbox if user wants to update inventory.
//If the checkbox is clicked then it will show a form
//That form will get style number and how many it contains. 
