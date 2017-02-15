(function($window){
  if(!$window){
    throw "No window :(";
  }

  var date = $window.Date;

  if(!date){
    throw "No Date in window :(";
  }

  var _MS_PER_DAY = 1000 * 60 * 60 * 24;

  function getValueInMilliseconds(date, milliseconds, num){
      var value = date.valueOf();
      value += milliseconds * num;
      return value;
  }

  date.prototype.getDaysInMonth = function () {
      return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
  };

  date.prototype.handlingDays = function (num) {
      return new Date(getValueInMilliseconds(this, 86400000, num));
  }

  date.prototype.handlingSeconds = function (num) {
      return new Date(getValueInMilliseconds(this, 1000, num));
  }

  date.prototype.handlingMinutes = function (num) {
      return new Date(getValueInMilliseconds(this, 60000, num));
  }

  date.prototype.handlingHours = function (num) {
      return new Date(getValueInMilliseconds(this, 3600000, num));
  }

  date.prototype.handlingMonths = function (num) {
      var n = this.getDate();
      this.setDate(1);
      this.setMonth(this.getMonth() + num);
      this.setDate(Math.min(n, this.getDaysInMonth()));
      return this;
  }

  date.prototype.diffInDays = function(otherDate){
    var utc1 = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate());
    var utc2 = Date.UTC(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  date.prototype.diffInHours = function(otherDate){
    return Math.abs(this - otherDate) / 36e5;
  }

  function getMonth(date) {
    var month = date.getMonth() + 1;
    return month < 10 ? '0' + month : '' + month;
  }

  date.prototype.compareDates = function(endDate) {
      var start = this;

      var toReturn = {
        years: 0,
        months: 0,
        days: 0
      }

      var days = start.diffInDays(endDate);
      var startDate = start;
      daysInMonth = startDate.getDaysInMonth();

      function handling(days){
        days = start.diffInDays(endDate);
        daysInMonth = startDate.getDaysInMonth();
        if(days >= 365){
          toReturn.years++;
          startDate = start.handlingMonths(12);
          daysInMonth = startDate.getDaysInMonth();
          days-= 365;
          handling(days);
        }else if(days >= daysInMonth){
          toReturn.months++;
          startDate = start.handlingMonths(1);
          days-= daysInMonth;
          handling(days);
        }else if(days <= daysInMonth){
          toReturn.days = days;
        }
      }

      handling(days);

      return toReturn;
  }

})(window)
