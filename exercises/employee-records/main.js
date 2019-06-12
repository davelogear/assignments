const employees = []

function Employee(name, jobTitle, sallery, status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.sallery = sallery;
    this.status =status;

    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name} Job Titile: ${this.jobTitle} Sallery: ${this.sallery} Status: ${this.status}`);
    }
}

const ep1 = new Employee("John", "agnet", "30/hr");
const ep2 = new Employee("Sarah", "agent", "22/hr");
const ep3 = new Employee("Greg", "Maniger", "Sallery");

ep2.status = "Part Time";

employees.push(ep1);
employees.push(ep2);
employees.push(ep3);

employees.forEach(items => items.printEmployeeForm());