/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var i,result;
    let units = ['gal','L','lbs','kg','mi','km'];
    input = input.replace(/ /g,"");
    for (i=0;i<units.length;i++) {
      if (input.indexOf(units[i]) >0) {
        result = input.replace(units[i],"");;
        break;
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var i,result;
    let units = ['gal','L','lbs','kg','mi','km'];
    for (i=0;i<units.length;i++) {
      if (input.indexOf(units[i]) >0) {
        result = units[i];
        break;
      }
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = '--';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    let n = eval(initNum);
    switch(initUnit) {
      case 'gal':
        result = n * galToL;
        break;
      case 'L':
        result = n / galToL;
        break;
      case 'lbs':
        result = n * lbsToKg;
        break;
      case 'kg':
        result = n / lbsToKg;
        break;
      case 'mi':
        result = n * miToKm;
        break;
      case 'km':
        result = n / miToKm;
        break;
      default:
        result = 0;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit}
    // example output: 
    // {initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}
    return result;
  };
  
}

module.exports = ConvertHandler;
