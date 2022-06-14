//
let id = 0

class Student {
  constructor(firstName, lastName, gitHub, email) {
    this.studentID = id++
    this.studentFirstName = firstName
    this.studentLastName = lastName
    this.studentGitHub = gitHub
    this.studentEmail = email
  }
}

module.exports = Student
