/**
 * @type DomainViolationError
 * @desc DomainViolationError cannot be displayed to actors(users). This situation is caused by insufficient
 * verification of the presentation or application layer, so rather than displaying this error, the fault
 * causing this error should be corrected. Therefore, DomainViolationError is just a string type that display
 * hints to developers.
 */
export type DomainViolationError = string | void
