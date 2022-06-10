import inquirer from "inquirer"

const main = async () => {
	console.log(`
Is It Leap?
--------------------------------------------
This program will help you determine whether a year is a leap year or not
    `)

	const answer = await inquirer.prompt({
		type: "input",
		name: "year",
		message: "Enter Year:",
	})

	const isLeap = checkLeapYear(answer.year)

	if (isLeap) {
		console.log(`The year ${answer.year} is a leap year!`)
	} else {
		console.log(`The year ${answer.year} is not a leap year`)
	}
}

const checkLeapYear = (year) => {
	if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
		return true
	} else {
		return false
	}
}

main()
