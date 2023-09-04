import { Validator }  from '../utilities/Validator.js'

export enum UnitOfTime {
	Seconds = "SECONDS",
	Minutes = "MINUTES",
	Hours = "HOURS",
	Days = "DAYS",
	Weeks = "WEEKS",
	Months = "MONTHS",
	Years = "YEARS",
}

export enum Focus {
	Textual = "TEXTUAL",
	Visual = "VISUAL",
	Auditory = "AUDITORY",
	Engagement = "ACTIVE",
	Social = "SOCIAL",
}

export enum Item {
	Phone = "PHONE",
	Computer = "COMPUTER",
	VR = "VR",
	GameConsole = "GAME CONSOLE",
}

export enum Place {
	Home = "HOME",
	Outdoors = "OUTDOORS",
	School = "SCHOOL",
	Anywhere = "ANYWHERE"
}

export enum YesNoCheckbox {
	Either = "Either",
	Yes = "Yes",
	No = "No",
}

export enum EnjoymentLevel {
	Unpleasent,
	Boring,
	Meh,
	Pleasant,
	Fun,
	VeryFun,
}

export function getEnumFromValue(enum_obj: object, value: any) {
	Validator.isEnumValueInEnum(enum_obj, value);
	return value;
}