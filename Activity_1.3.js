let name = "Dianna", age = 20, course = "BSIT", year = "3rd Year", section = "3A";
let IT300 = 80, IT304 = 90, IT302 = 82, status = "Enrolled", units = 32;

const school = "NWSSU", semester = "1st Semester", sy = "2026-2027";
const tuition = 13000, maxUnits = 32, studentID = "2024-85-1", type = "Regular";
const registrar = "Registrar Office", campus = "Main Campus", system = "Enrollment System";

const greet = x => `Welcome, ${x}!`;
const total = a => a.reduce((x, y) => x + y, 0);
const check = x => x <= maxUnits ? "Allowed" : "Overload";
const upper = x => x.toUpperCase();
const add = (x, y) => x + y;

const info = [name, age, course];
const [n, a, c] = info;
const subjects = ["IT300", "IT304", "IT302"];
const [s1, s2, s3] = subjects;
const grades = [IT300, IT304, IT302];
const [g1, g2, g3] = grades;

const student = { name, age, course };
const { name: n1, age: a1, course: c1 } = student;
const schoolInfo = { school, campus, semester };
const { school: sc, campus: cp, semester: sem } = schoolInfo;
const enrollment = { studentID, type, units };
const { studentID: id, type: t, units: u } = enrollment;

const subjects1 = ["IT300", "IT304"];
const allSubjects = [...subjects1, "IT302"];
const units1 = [3, 3];
const allUnits = [...units1, 3];

const basic = { name, age };
const profile = { ...basic, course, year };
const contact = { studentID };
const fullProfile = { ...profile, ...contact };

const upperSubjects = subjects.map(x => x.toUpperCase());
const subjectMessages = subjects.map(x => `Enrolled in ${x}`);
const passed = grades.filter(x => x >= 75);
const highGrades = grades.filter(x => x >= 90);

const payment = { details: { method: "Cash" } };
const method = payment.details?.method;
const scholarship = {};
const scholarshipName = scholarship.details?.name;

console.log(`
===== ${system} =====
${greet(name)}
Student ID: ${studentID}
Name: ${name}
Age: ${age}
Course: ${course}
Year: ${year}
Section: ${section}
School: ${school}
Campus: ${campus}
Semester: ${semester}
School Year: ${sy}
Type: ${type}
Units: ${units}
Unit Status: ${check(units)}
Subjects: ${allSubjects}
Grades: ${grades}
Passed: ${passed}
High Grades: ${highGrades}
Payment: ${method}
Scholarship: ${scholarshipName}
Name in Uppercase: ${upper(name)}
Total Units: ${total(allUnits)}
`)
;