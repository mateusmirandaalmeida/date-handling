

Date.prototype.handlingDays = function (num) {
    var value = this.valueOf();
    value += 86400000 * num;
    return new Date(value);
}

Date.prototype.handlingSeconds = function (num) {
    var value = this.valueOf();
    value += 1000 * num;
    return new Date(value);
}

Date.prototype.handlingMinutes = function (num) {
    var value = this.valueOf();
    value += 60000 * num;
    return new Date(value);
}

Date.prototype.handlingHours = function (num) {
    var value = this.valueOf();
    value += 3600000 * num;
    return new Date(value);
}

Date.prototype.handlingMonths = function (num) {
    var value = new Date(this.valueOf());

    var mo = this.getMonth();
    var yr = this.getYear();

    mo = (mo + num) % 12;
    if (0 > mo) {
        yr += (this.getMonth() + num - mo - 12) / 12;
        mo += 12;
    }
    else
        yr += ((this.getMonth() + num - mo) / 12);

    value.setMonth(mo);
    value.setYear(yr);
    return value;
}
