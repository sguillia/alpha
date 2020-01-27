function isEmailValid(email) {
	if (typeof email !== "string") {
		return false
	}
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email.toLowerCase())
}

const emails = [
	"someone@example.com",
	"one_person@circus.abc",
	"someratherlongemailaddress@popopopopo.dev",
	"mark...and...lili@gmail.com",
	"FrankTheTank@someting.com",
	"peterSmith@000000.it",
	"agoodemailaddress@because.yes",
]


function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
const email = emails[randomNumber(0, emails.length)]
isEmailValid(email)

module.exports = { isEmailValid }
