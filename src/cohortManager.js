const Cohort = require('./cohort')

//
class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    if (name != null && !this.isCohort(name)) {
      const cohort = new Cohort(name)
      this.cohorts.push(cohort)
      return cohort
    }
    return 'error'
  }

  getAllCohortNames() {
    const allCohortNames = this.cohorts.map((cohort) => cohort.cohortName)
    return allCohortNames
  }

  getCohortIndex(name) {
    const index = this.getAllCohortNames().indexOf(name)
    return index
  }

  getCohort(name) {
    const cohortIndex = this.getCohortIndex(name)

    if (this.isCohort(name)) {
      return this.cohorts[cohortIndex]
    }
    return 'error'
  }

  isCohort(name) {
    if (this.getAllCohortNames().includes(name)) {
      return true
    }
    return false
  }

  removeCohort(name) {
    const cohortIndex = this.getCohortIndex(name)

    if (this.isCohort(name)) {
      this.cohorts.splice(cohortIndex, 1)
      return this.getAllCohortNames()
    }
    return 'error'
  }

  addStudent(cohortName, firstName, lastName, gitHub, email) {
    if (
      cohortName != null &&
      firstName != null &&
      lastName != null &&
      gitHub != null &&
      email != null
    ) {
      const cohort = this.getCohort(cohortName)
      cohort.addStudent(firstName, lastName, gitHub, email)
      return cohort
    }
    return 'error'
  }

  removeStudent(studentId, cohortName) {
    const cohort = this.getCohort(cohortName)
    if (cohort !== 'error') {
      cohort.removeStudent(studentId)
      return cohort
    }
    return 'error'
  }
}

// const cohortManager = new CohortManager()

// console.log(cohortManager.createCohort('22'))
// console.log(cohortManager.addStudent('22', 'bob','bob','@gog','bob@gog.bom'))
// console.log(cohortManager.addStudent('22', 'bsdfob','bob','@gog','bob@gog.bom'))
// console.log(cohortManager.removeStudent(2, '22'))
// console.log(cohortManager.createCohort('23'))
// console.log(cohortManager.createCohort('24'))
// console.log(cohortManager.getCohort('22'))
// console.log('all names', cohortManager.getAllCohortNames())
// console.log('cohorts', cohortManager.cohorts)

module.exports = CohortManager
