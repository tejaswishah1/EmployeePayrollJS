//UC-2-Calculate Daily Wage of Employee

let empHrs = 0;
switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage = empHrs*WAGE_PER_HOUR;
console.log("Emp wage = "+empWage)
