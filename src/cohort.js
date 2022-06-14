//
const defaultMaxCapacity = 24

class Cohort {
  constructor(name) {
    this.cohortName = name
    this.students = []
    this.maxCapacity = defaultMaxCapacity
  }

  addStudent(firstName, lastName, gitHub, email) {}
}

module.exports = Cohort
