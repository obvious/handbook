# Evaluating a take-home exercise

We score a solution on six criteria, which have been selected to take into account the fact that candidates might have different preferences for libraries/frameworks than us because of circumstances, and we look for general programming ability rather than familiarity with specific tools.

Every submitted exercise will be graded based on the [rubric](scoring-a-take-home-exercise.md#scoring-rubric) and will be given a score \(from **0** to **12** points\). We have a certain cut-off score, which an exercise will have to meet to decide if a candidate should be taken forward to the next stage.

If a solution doesn't meet our standards, we **will** respond with an appropriate rejection mail.

## Scoring rubric

The scoring has six different sections \(see table below\), all of which contribute a certain number of points to the overall score of a solution. The scoring process has been designed to compensate for a solution lacking in one aspect, but done well in others.

1. For each of the sections in the table below, look at the state of the repository and select an appropriate score.
2. Sum up the scores for the individual sections.
3. If the total score is greater than or equal to the cut-off score, move the candidate to the next stage of the interview.
4. If the total score is less than the cut-off score, respond with an email to the candidate which contains the score and what criteria they lost points in.

| Criteria | Score |
| :--- | :--- |
| **Application** |  |
| Barebones, developer UI with no error/touch feedback to the user. | 0 |
| Functional UI, and with error feedback and/or touch feedback. | 1 |
| Polished UI, with thought put into the user experience and/or with nice transitions and animations. | 2 |
| **Documentation** |  |
| No documentation in the repository. | 0 |
| Some documentation with basic setup instructions or feature descriptions. | 1 |
| Detailed documentation with setup, screenshots, configuration instructions, etc. | 2 |
| **Commit History \(See** [**Note 1**](scoring-a-take-home-exercise.md#note-1) **below\)** |  |
| The repository has a few large commits \(Exceptions are commits with auto-generated code like Room schemas or the initial commit when initialising a project through an IDE or a CLI\). | 0 |
| The repository has some small-ish commits with clear \(what the commit does\) messages. | 1 |
| The repository has many tiny, atomic commits with clear, descriptive \(what the commit does and why, when appropriate\) messages. | 2 |
| **Testing** |  |
| There are either no tests, or a few tests that aren't really that useful. | 0 |
| Tests for business logic are present, but they are tested via instrumentation/UI tests. | 1 |
| Business logic is tested using unit tests, and there might be instrumented/UI tests for testing platform integration. The tests need not be comprehensive as long as they are testing important code paths. | 2 |
| **Separation of concerns** |  |
| Business, presentation, and implementation logic are all mixed together \(everything in the Activity/View/Fragment\). | 0 |
| There is some separation of concerns \(ex: separate interface and classes for querying data/making network calls\). | 1 |
| Candidate has used a standard architecture pattern \(MV\*/others\) or a library \(Mobius/MvRx/others\). The candidate could also have rolled their own architecture as long as there is clear documentation on their custom solution. | 2 |
| **Code maintainability** |  |
| Names are unnecessarily short or meaningless. Ex: `a`, `something`, `doWork`, `runQuery`. An exception to this rule would be something like the iteration variable in a `for` loop. | 0 |
| Names are mostly descriptive and indicative of the intent. Some names might occasionally be unclear without explanation. | 1 |
| Names are mostly descriptive and indicative of the intent. Unclear names have clear comments explaining the purpose of the variable/function and the intent behind it. | 2 |
| **Minimum Score Required** | **7** |

## Notes

### Note 1

The ideal "size" of a commit diff is subjective. A good rule of thumb would be to follow the section on ["Small CLs"](https://google.github.io/eng-practices/review/developer/small-cls.html) in the Google Engineering Practices guide.

## Recommended reading and watching

* Google's guide for Change List authors: [https://google.github.io/eng-practices/review/developer/](https://google.github.io/eng-practices/review/developer/)
* Write awesome tests by Jeroen Mols: [https://www.youtube.com/watch?v=F8Gc8Nwf0yk](https://www.youtube.com/watch?v=F8Gc8Nwf0yk)

