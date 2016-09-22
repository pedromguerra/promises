var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  var swith = true;

  if (true /* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});


promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
