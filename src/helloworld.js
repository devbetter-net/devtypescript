var message = 'Hello, World!';
console.log(message.toLocaleUpperCase());
var firstName = "John";
var title = "Web Developer";
var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
console.log(profile);
var employee = {
    firstName: 'Khoa',
    lastName: 'Nguyen',
    age: 25,
    jobTitle: 'Web Developer'
};
console.table(employee);
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log("isSummer: ", isItSummer(Month.Jun)); // true
