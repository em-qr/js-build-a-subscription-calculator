var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  console.log(subDuration);
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premimum") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have a chosen ${subDuration} month ${subType} plan for $${total}.`;
};
