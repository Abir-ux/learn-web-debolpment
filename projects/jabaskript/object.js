var student = { id:121, phone:2222, name:"Abir"};
var student2 ={ id:131, phone:3425, name:"mahi"}

var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo = student[phonePropName];

student2.phone = 5462534;

console.log(phoneNo);
console.log(student2);