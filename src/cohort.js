const Student = require('./student')

//
const defaultMaxCapacity = 24

class Cohort {
  constructor(name) {
    this.cohortName = name
    this.students = []
    this.maxCapacity = defaultMaxCapacity
  }

  addStudent(firstName, lastName, gitHub, email) {
    if (
      !this.checkStudent(firstName, lastName, gitHub, email) &&
      this.students.length < this.maxCapacity
    ) {
      const student = new Student(firstName, lastName, gitHub, email)
      this.students.push(student)
      return student
    }
    return false
  }

  removeStudent(studentId) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].studentID === studentId) {
        this.students.splice(i, 1)
        return true
      }
    }
    return false
  }

  checkStudent(firstName, lastName, gitHub, email) {
    for (let i = 0; i < this.students.length; i++) {
      if (
        this.students[i].studentFirstName === firstName &&
        this.students[i].studentLastName === lastName &&
        this.students[i].studentGitHub === gitHub &&
        this.students[i].studentEmail === email
      ) {
        return true
      }
    }
    return false
  }
}

// const cohort = new Cohort()

// console.log('checker', cohort.checkStudent('bob','bob','@gog','bob@gog.bom'))
// console.log(cohort.addStudent('bob','bob','@gog','bob@gog.bom'))
// console.log('checker', cohort.checkStudent('bob','bob','@gog','bob@gog.bom'))
// console.log(cohort.addStudent('bgfhob','bob','@gog','bob@gog.bom'))
// console.log('remover', cohort.removeStudent(2))
// console.log(cohort.students)
// console.log(cohort.students[0].studentFirstName)
// console.log(cohort.students[0].studentLastName)
// console.log(cohort.students[0].studentGitHub)
// console.log(cohort.students[0].studentEmail)
// console.log(cohort.students[0].studentFirstName)
// console.log(cohort.students.length)

module.exports = Cohort
