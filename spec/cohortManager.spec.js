const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('CohortManager', () => {
  let cohortManager
  let id
  beforeEach(() => {
    cohortManager = new CohortManager()
    id = 1
  })

  it('can create a cohort with a cohort name', () => {
    // set up
    const newCohortName = 'Cohort A'
    const expected = {
      cohortName: newCohortName,
      students: [],
      maxCapacity: 24
    }
    // execute
    const result = cohortManager.createCohort(newCohortName)
    // console.log(cohortManager.createCohort(newCohortName))
    // verify
    expect(result.cohortName).toEqual(expected.cohortName)
    expect(result.students).toEqual(expected.students)
    expect(result.maxCapacity).toEqual(expected.maxCapacity)
  })

  it('cannot create a cohort with an invalid cohort name', () => {
    // set up
    const newCohortName = null
    const expected = 'error'
    // execute
    const result = cohortManager.createCohort(newCohortName)
    // console.log(cohortManager.createCohort(newCohortName))
    // verify
    expect(result).toEqual(expected)
  })

  it('cannot create a cohort with a cohort name that already exists', () => {
    // set up
    const newCohortName = 'Cohort A'
    const expected = 'error'

    const newCohort = cohortManager.createCohort(newCohortName)
    // execute
    const result = cohortManager.createCohort(newCohortName)
    // console.log(cohortManager.createCohort(newCohortName))
    // verify
    expect(newCohort.cohortName).toEqual(newCohortName)
    expect(result).toEqual(expected)
  })

  it('can search for a specific Cohort by Cohort Name', () => {
    // set up
    const cohortNameA = 'Cohort A'
    const cohortNameB = 'Cohort B'
    cohortManager.createCohort(cohortNameA)
    cohortManager.createCohort(cohortNameB)
    const cohortNameList = [cohortNameA, cohortNameB]

    const expected = { cohortName: cohortNameB, students: [], maxCapacity: 24 }
    // execute
    const result = cohortManager.getCohort(cohortNameB)
    const allCohortNames = cohortManager.getAllCohortNames()
    // verify
    expect(result.cohortName).toEqual(expected.cohortName)
    expect(result.students).toEqual(expected.students)
    expect(result.maxCapacity).toEqual(expected.maxCapacity)
    expect(allCohortNames).toEqual(cohortNameList)
  })

  it('can display all Cohorts by Name in Array correctly', () => {
    // set up
    const cohortNameA = 'Cohort A'
    const cohortNameB = 'Cohort B'
    const cohortNameC = 'Cohort C'

    const expected = [cohortNameA, cohortNameB, cohortNameC]

    cohortManager.createCohort(cohortNameA)
    cohortManager.createCohort(cohortNameB)
    cohortManager.createCohort(cohortNameC)
    // execute
    const result = cohortManager.getAllCohortNames()
    // verify
    expect(result[0]).toEqual(expected[0])
    expect(result[1]).toEqual(expected[1])
    expect(result[2]).toEqual(expected[2])
  })

  it('can remove a cohort using a cohort name', () => {
    // set up
    const newCohortName = 'Cohort A'
    const expected = ['Cohort B', 'Cohort C']

    cohortManager.createCohort(newCohortName)
    cohortManager.createCohort('Cohort B')
    cohortManager.createCohort('Cohort C')
    // execute
    const result = cohortManager.removeCohort(newCohortName)
    // verify
    expect(result).toEqual(expected)
    expect(result[0]).toEqual(expected[0])
    expect(result[1]).toEqual(expected[1])
  })

  it("cannot remove a cohort that doesn't exist", () => {
    // set up
    const alienCohortName = 'Cohort D'
    const expected = 'error'

    cohortManager.createCohort('Cohort A')
    cohortManager.createCohort('Cohort B')
    cohortManager.createCohort('Cohort C')
    // execute
    const result = cohortManager.removeCohort(alienCohortName)
    const allCohortNames = cohortManager.getAllCohortNames()
    // verify
    expect(result).toEqual(expected)
    expect(allCohortNames).toEqual(['Cohort A', 'Cohort B', 'Cohort C'])
  })
})
