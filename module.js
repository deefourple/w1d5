module.exports = {
  storageDB: 100,
  deployed: false,
  displayStatus: function() {
    if (this.deployed === false) {
    console.log("Temporarily offline");
    }
    else {
      console.log("Online");
    }
  }
}