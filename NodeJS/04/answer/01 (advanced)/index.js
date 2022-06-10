#!/usr/bin/env node

// Import Packages

import chalk from "chalk"
import inquirer from "inquirer"
import gradient from "gradient-string"
import chalkAnimation from "chalk-animation"
import figlet from "figlet"
import { createSpinner } from "nanospinner"

// Main Function
const main = async () => {
	console.clear() // Clear whatever that's on your console
	await welcome()
	await askYear()
	await endingMessage()
}

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

const welcome = async () => {
	const rainbowTitle = chalkAnimation.rainbow("Is It Leap?")
	await sleep()
	rainbowTitle.stop()

	console.log(`----------------------------------------------------------------------------------------------
This program will help you determine whether a year is a leap year or not`)
}

const askYear = async () => {
	const answer = await inquirer.prompt({
		name: "Year",
		type: "input",
		message: "Enter Year:",
	})

	const isLeap = checkLeapYear(answer.Year)

	await handleLeap(isLeap, answer.Year)
}

const checkLeapYear = (year) => {
	if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
		return true
	} else {
		return false
	}
}

const handleLeap = async (isLeap, year) => {
	const spinner = createSpinner("Checking answer...").start()
	await sleep()

	if (isLeap) {
		await spinner.success({
			text: `${chalk.bold.green("Success:")} Year ${year} is a leap year!`,
		})
	} else {
		await spinner.error({
			text: `${chalk.bold.red(`Failure:`)} Year ${year} is NOT a leap year!`,
		})
	}
}

const endingMessage = async () => {
	const msg = `Thanks For Playing!`

	figlet(msg, (err, data) => {
		console.log(gradient.pastel.multiline(data))
	})
}

main()
