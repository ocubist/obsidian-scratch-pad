export class UnexpectedError extends Error {
	constructor(
		msg = "Unexpected Error, that should not have been happened..."
	) {
		super(msg);
	}
}
