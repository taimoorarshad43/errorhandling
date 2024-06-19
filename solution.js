function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.
    console.log("Outcome is: ", outcome);

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation failed mysteriously!");
	}
}

const numberOfOperations = 20;

const daysOnSuccess = 13;
const daysOnFailure = 1;
const daysOnAttendance = 3;

let daysEarned = 0;

for (let i = 0; i < numberOfOperations; i++)
{
    try{
        mysteryOperation()
        daysEarned += daysOnSuccess;
    } catch (err) {
        console.log("Error is: ", err);
        daysEarned += daysOnFailure;
    } finally {
        daysEarned += daysOnAttendance;
    }
}

console.log(daysEarned);
