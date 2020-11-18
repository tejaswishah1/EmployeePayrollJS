const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
while((totalEmpHrs<=MAX_HRS_IN_MONTH) && 
        (totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs = totalWorkingDays + empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);

console.log("Daily Wage Array: "+empDailyWageArray);
console.log("Emp hours: "+totalEmpHrs);
console.log("Emp wage: "+empWage)
console.log("Total working days: "+totalWorkingDays);
console.log("---------------------------------------------------");

//Array Helper Function
//UC 7A
console.log("UC 7A");
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage = totEmpWage + dailyWage;
}

empDailyWageArray.forEach(sum);
console.log("Total Days: "+totalWorkingDays);
console.log("Total hrs: "+totalEmpHrs);
console.log("Total Emp Wage: "+totEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}

console.log("Emp Wage with reduce: "+empDailyWageArray.reduce(totalWages,0));
console.log("---------------------------------------------------");

//UC 7B
console.log("UC 7B");
let dailyCntr =0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map:");
console.log(mapDayWithWageArr);
console.log("---------------------------------------------------");

//UC 7C
console.log("UC 7C");
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Days With Full Time Wage Earned Using Filter:");
console.log(fullDayWageArr);
console.log("---------------------------------------------------");

//UC 7D
console.log("UC 7D");
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First time Full Time Wage earned on day: "+
    mapDayWithWageArr.find(findFullTimeWage));
console.log("---------------------------------------------------");

//UC 7E
console.log("UC 7E");
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Check all Element have Full Time Wage: "+
    fullDayWageArr.every(findFullTimeWage));
console.log("---------------------------------------------------");

//UC 7F
console.log("UC 7F");
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("Check if any have Part Time Wage: "+
    mapDayWithWageArr.some(isAnyPartTimeWage));
console.log("---------------------------------------------------");

//UC 7G
console.log("UC 7G");
function totalDaysWorked(noOfDays,dailyWage){
    if(dailyWage>0) return noOfDays+1;
    return noOfDays;
}
console.log("Number of Days Emp Worked: "+
    empDailyWageArray.reduce(totalDaysWorked,0));