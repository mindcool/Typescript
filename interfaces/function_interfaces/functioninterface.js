var summary = function (id, publisher) {
    if (id === 1) {
        return publisher + " Price 10 USD";
    }
    else {
        return publisher + "Price N/A";
    }
};
console.log(summary(1, "Noyan Publishing"));
