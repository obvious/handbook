# Scoring the take-home exercise
Ideally, we would like to optimize reviewing of take-home exercises for "quick failures", i.e., filter out lower quality solutions with the least amount of effort. To that end, we will use the following series of quick checks to calculate an overall score for a solution and reject a candidate if the score of the submitted solution does not meet a given cut-off point for a given role.

Note that meeting the cut-off score is a ncessary, but not a sufficient condition to consider a candidate for the in-person interview. If a solution passes the cut-off score, then a pair of engineers will review the exercise more thoroughly and decide on whether we should bring a candidate in for the in-person interview or not.

## Process
1. For each of the four sections in the table below, look at the state of the repository and select an appropriate score for the role the candidate is appying for.
2. Sum up the scores for the individual sections (**Documentation**, **Commit History**, **Testing**, and **Application**).
3. If the total score is greater than or equal to the cut-off score for a role, then a pair of engineers can proceed with a detailed review of the take-home exercise.

|                                                                                                                                                                  | P2 (2 - 4 years) | P3 (4 - 8 years) |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|------------------|
| **Documentation**                                                                                                                                                |                  |                  |
| No documentation in the repository                                                                                                                               | 0                | -1               |
| Some documentation with basic setup instructions or feature descriptions                                                                                         | 1                | 1                |
| Detailed documentation with setup, screenshots, configuration instructions, etc                                                                                  | 2                | 2                |
| **Commit History**                                                                                                                                               |                  |                  |
| The repository has a few large (500+ diff size) commits (Exceptions for auto-generated code like Room schemas or the initial commit when initialising a project) | 0                | -1               |
| The repository has some small-ish (<500 diff size) commits with clear (what the commit does) messages                                                            | 1                | 1                |
| The repository has many tiny, atomic commits (<100 diff size) commits with clear, descriptive (what the commit does and why, when appropriate) messages          | 2                | 2                |
| **Testing**                                                                                                                                                      |                  |                  |
| There are either no tests, or a few tests that aren't really that useful                                                                                         | 0                | -1               |
| Tests for business logic are present, but they are tested via instrumentation/UI tests                                                                           | 1                | 1                |
| Business logic is tested using a good number of unit tests, and there might be instrumentated/UI tests for testing platform integration                          | 2                | 2                |
| **Application**                                                                                                                                                  |                  |                  |
| Barebones, developer UI with no error/touch feedback to the user                                                                                                 | 0                | -1               |
| Functional UI, and with error feedback and/or touch feedback                                                                                                     | 1                | 1                |
| Polished UI, with thought put into the user experience and/or with nice transitions and animations                                                               | 2                | 2                |
|                                                                                                                                                                  |                  |                  |
| **Minimum Score Required**                                                                                                                                       | **4**            | **5**            |
