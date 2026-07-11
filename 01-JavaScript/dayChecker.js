let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Work");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Holiday");
        break;

    default:
        console.log("Weekday");
}