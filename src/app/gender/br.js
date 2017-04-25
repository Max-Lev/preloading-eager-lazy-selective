var br = function () {
  this.getName = function () {
    console.log('getName');
  }
}

var brand = new br();
exports.Br = brand;
