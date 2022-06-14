The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```
---
```
- Search for student by student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes

Nouns:
 - Cohort
 - Cohort Name
 - Student
 - Errors
 - List
 - Capacity
 - Student Name, First and Last
 - studentID
 - Student github username
 - Student Email
 - Results

Verbs:
 - Create
 - Search
 - Add
 - Remove
 - Return

New Domain Model:

CohortManager (OBJECT):
- PROPERTIES:
  - cohorts: [] of Cohort
  - cohortList: [] of cohortNames

- METHODS:
  - createCohort(name: String): returns Cohort IF 'name' is a valid type AND IF cohort with 'name' does not already exist in cohortList, else Error msg.
  - addStudent(cohortName: String, firstName: String, lastName: String, github: String, email: String): returns Student IF 'cohortName' is a valid type AND IF Student is not already in any Cohort, else Error msg.

  - searchCohort/getCohort(name: String): returns Cohort IF found, error msg IF not found.
  - searchStudent/getStudent(id: Integer): returns Student in this.cohorts IF found, error msg IF not found.

  - removeCohort(name: String): returns True IF 'name' matches in cohortList, else Error msg
  - removeStudent(studentID: Integer, cohortName: String): returns True IF 'cohortName'/'studentID' is a valid type AND IF Student/Cohort exists, else False.

  - isCohort(cohortName: String): returns True after checking if getAllCohortNames.includes cohortName, else False.
  - isStudent(firstName: String, lastName: String, github: String, email: String): returns True after checking if getAllStudents.includes isStudent parameters, else False.

  - getAllCohortNames(): returns list of Cohort names within this.cohorts.
  - getAllStudents(): returns list of student details within this.cohorts.

Cohort (Class || Object):
- PROPERTIES:
  - cohortName: String
  - students: [] of student Object
  - maxCapacity: Integer

- METHODS:
  - addStudent(student): returns True and adds student to this.students IF able to add student, else returns False.
  - removeStudent(studentId): returns True and removes student from this.students using studentId IF studentId matches, else returns False.

Student (Class || Object):
- OUTSIDE CLASS:
  - id = 0

- PROPERTIES:
  - studentID: id++
  - studentFirstName: String
  - studentLastName: String
  - studentGithub: String
  - studentEmail: String

<!-- 
Old Domain Model:

studentDetails (JSON || Object):
- PROPERTIES
  - studentID: integer
  - studentNameFirst: String
  - studentNameLast: String
  - studentGithub: String
  - studentEmail: String

Cohort (Class || Object):
- PROPERTIES:
  - cohortName: String
  - students: [] of student Object: {studentID, studentNameFirst}

- METHODS:
  - searchStudent/getStudent(id: Integer): returns Student IF found, error msg IF not found.
  - addStudent(): returns True and adds student to this.students IF able to add student, else returns False.

CohortManager (Class):
- PROPERTIES:
  - cohortList: [] filled with Cohort
  - maxCapacity: 24

- METHODS:
  - createCohort(name: String): returns True IF succeeded, False IF 'name' is invalid type OR IF 'name' already exists in cohortList.
  - addStudent(studentID: Integer, cohortName: String): returns True IF succeeded, False IF 'cohortName' is invalid type OR IF Student already exists in any Cohort.
  - searchCohort/getCohort(name: String): returns Cohort IF found, error msg IF not found.
  - searchStudent/getStudent(id: Integer): returns Student IF found, error msg IF not found.
  - removeCohort(name: String): returns True IF succeeded, False IF 'name' is invalid type OR IF 'name' doesn't exist in cohortList.
  - removeStudent(studentID: Integer, cohortName: String): returns True IF succeeded, False IF 'cohortName'/'studentID' is invalid type OR IF Student/Cohgort doesn't exist.
  - obeysMaxCapacity(): return True IF addStudent will not pass max capacity, else False. -->
