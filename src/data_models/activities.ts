import { Activity }  from '../classes/Activity.js'
import { Duration }  from '../classes/Duration.js'
import { NumRange }  from '../classes/NumRange.js'
import { Focus, UnitOfTime, Place, Item as Item, YesNoCheckbox, EnjoymentLevel } from '../types/enums.js';

export const activities: Activity[] = [
	new Activity(
		{
			name: "Walk",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(1, UnitOfTime.Hours),
			),
			required_focuses: [],
			required_devices: [],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Outdoors
		}
	),

	new Activity(
		{
			name: "Read",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(1, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Textual],
			required_devices: [Item.Phone], // TODO: And Or for devices like PHONE AND COMPUTER or PHONE OR COMPUTER
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Steam Game",
			description: "Play a game on steam",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Home
		}
	),

	new Activity(
		{
			name: "Gartic Phone",
			description: "Play a game of Gartic Phone with friends",
			duration_range: new NumRange<Duration>(
				new Duration(15, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Social, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(5, 30),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Home
		}
	),

	new Activity(
		{
			name: "Message Friends",
			description: "Message a friend about their life or your own",
			duration_range: new NumRange<Duration>(
				new Duration(1, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Social, Focus.Textual],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Check Discord",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(0, UnitOfTime.Minutes),
				new Duration(10, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Textual],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Check Grades",
			description: "Check your grades and assignments on SIS",
			duration_range: new NumRange<Duration>(
				new Duration(0, UnitOfTime.Minutes),
				new Duration(3, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Textual],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Mediocre,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play I Love Hue",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(0, UnitOfTime.Minutes),
				new Duration(15, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Visual, Focus.Engagement],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Check Email",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(0, UnitOfTime.Minutes),
				new Duration(15, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Textual],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Mediocre,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Plan Out Day",
			description: "Plan out everything you want to do today, tomorrow, this week, this month, or this year",
			duration_range: new NumRange<Duration>(
				new Duration(0, UnitOfTime.Minutes),
				new Duration(20, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Textual, Focus.Engagement],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Mediocre,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Listen To Music",
			description: "Listen to your favorite songs without doing anything else",
			duration_range: new NumRange<Duration>(
				new Duration(3, UnitOfTime.Minutes),
				new Duration(30, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Auditory],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Write Down Ideas",
			description: "Come up with ideas for game shows, Youtube, or the Discord server and write them down in notes",
			duration_range: new NumRange<Duration>(
				new Duration(0, UnitOfTime.Minutes),
				new Duration(15, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Engagement, Focus.Textual],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Watch A Youtube Series",
			description: "Pick a long-term series to watch and watch it",
			duration_range: new NumRange<Duration>(
				new Duration(20, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Auditory],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play Arcaea",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(5, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Engagement, Focus.Auditory],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Home
		}
	),

	new Activity(
		{
			name: "Play Project Sekai",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(5, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Engagement, Focus.Auditory],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Improve Activity Generator",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(20, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Engagement, Focus.Textual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play Town of Salem",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(15, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Engagement],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Listen To a Podcast",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Find New Music",
			description: "Check your Music Library notes and check for new music",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Watch a TV Series",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.SuperFun,
			required_place: Place.Home
		}
	),

	new Activity(
		{
			name: "Watch a Movie",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(1, UnitOfTime.Hours),
				new Duration(4, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.SuperFun,
			required_place: Place.Home
		}
	),

	new Activity(
		{
			name: "Watch Anime",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(25, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.SuperFun,
			required_place: Place.Home
		}
	),

	new Activity(
		{
			name: "Play Beat Saber",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory, Focus.Visual, Focus.Engagement],
			required_devices: [Item.VR],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Converse with ChatGPT",
			description: "Talk with ChatGPT about life advice, your preffered workplace enviorment, college tips, or your career. Ask for questionarres, roleplay with ChatGPT, or play a text-based game.",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Textual, Focus.Engagement],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play Celeste",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play Hollow Knight",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play Danganronpa",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play The End Is Nigh",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play Minecraft",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 25),
			needInternet: true,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Play A Wii / Wii U Game",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement, Focus.Visual],
			required_devices: [Item.GameConsole],
			num_participants_needed: new NumRange<number>(1, 8),
			needInternet: false,
			isProductive: YesNoCheckbox.No,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Home
		}
	),

	new Activity(
		{
			name: "Look Up College Tips",
			description: "Look up tips for surviving college freshman year",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Auditory],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Do Anki Notes",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(0, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Textual, Focus.Engagement],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Boring,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Answer Your Youtube Comments",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Textual, Focus.Engagement],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Boring,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Update Budget Spreadsheet",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(5, UnitOfTime.Minutes),
				new Duration(30, UnitOfTime.Minutes),
			),
			required_focuses: [Focus.Textual, Focus.Engagement],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Boring,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Improve The LL Point Commands",
			description: "Check notes from TODO list for improving features",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Textual, Focus.Engagement],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Sync Music To Phone",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(1, UnitOfTime.Minutes),
				new Duration(15, UnitOfTime.Minutes),
			),
			required_focuses: [],
			required_devices: [Item.Computer, Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Boring,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Organize Your Music",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Mediocre,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Work on Rapid Discord Mafia Game Show",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Textual, Focus.Engagement],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Release LL Supporter Vids",
			description: "Upload the existing LL supporter videos to an extras channel",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Engagement],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Pleasant,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Upload Tune Tournament Videos",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(30, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Auditory, Focus.Engagement],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Boring,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Organize Phone Photos",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Engagement],
			required_devices: [Item.Phone],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Mediocre,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "Organize Computer Folders",
			description: "",
			duration_range: new NumRange<Duration>(
				new Duration(10, UnitOfTime.Minutes),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Visual, Focus.Engagement],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: false,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Mediocre,
			required_place: Place.Anywhere
		}
	),

	new Activity(
		{
			name: "LL Blind Playthroughs!",
			description: "Record, Edit, or Upload an LL Blind Playthrough",
			duration_range: new NumRange<Duration>(
				new Duration(1, UnitOfTime.Hours),
				new Duration(12, UnitOfTime.Hours),
			),
			required_focuses: [Focus.Auditory, Focus.Engagement, Focus.Visual],
			required_devices: [Item.Computer],
			num_participants_needed: new NumRange<number>(1, 1),
			needInternet: true,
			isProductive: YesNoCheckbox.Yes,
			enjoyment_level: EnjoymentLevel.Enjoyable,
			required_place: Place.Home
		}
	),
];