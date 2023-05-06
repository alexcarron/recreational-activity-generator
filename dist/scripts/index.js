import { Activity } from './classes/Activity.js';
import { Duration } from './classes/Duration.js';
import { NumRange } from './classes/NumRange.js';
import { Focus, Item, Place, UnitOfTime, YesNoCheckbox, getEnumFromValue, EnjoymentLevel } from './types/enums.js';
import { ToCase } from './utilities/ToCase.js';
import { Parser } from './utilities/Parser.js';
import { activities } from './data_models/activities.js';
function addEnumOptionsToSelection(select_elem, Enum, default_option = undefined) {
    for (let enumerator of Object.values(Enum)) {
        if (typeof enumerator === "number") {
            continue;
        }
        else {
            const enum_txt = ToCase.titleCase(enumerator);
            const option = document.createElement("option");
            option.textContent = enum_txt;
            if (Object.values(Enum)
                .every((value) => (typeof value === "string"))) {
                option.value = enumerator;
            }
            else {
                option.value = Enum[enumerator];
            }
            select_elem.append(option);
            if (default_option === enumerator) {
                const option_elm = document.querySelector(`option[value="${enumerator}"]`);
                if (option_elm) {
                    option.setAttribute("selected", "selected");
                    option.selected = true;
                }
            }
        }
    }
}
function showActivities(activities_section, ...activities) {
    activities_section.innerHTML = "";
    for (const item of activities) {
        const activity = item;
        const activity_wrapper = getActivityWrapper(activity);
        activities_section.append(activity_wrapper);
    }
}
function getActivityWrapper(activity) {
    const activity_wrapper = document.createElement("div");
    activity_wrapper === null || activity_wrapper === void 0 ? void 0 : activity_wrapper.classList.add("activity_wrapper");
    {
        const header = document.createElement("header");
        const name_heading = document.createElement("h2");
        name_heading === null || name_heading === void 0 ? void 0 : name_heading.classList.add("name_heading");
        name_heading.textContent = activity.name;
        header.append(name_heading);
        activity_wrapper.append(header);
    }
    if (activity.description !== "") {
        const description_section = document.createElement("section");
        description_section === null || description_section === void 0 ? void 0 : description_section.classList.add("description_section");
        const description_heading = document.createElement("h3");
        description_heading === null || description_heading === void 0 ? void 0 : description_heading.classList.add("description_heading");
        const description_paragraph = document.createElement("p");
        description_paragraph === null || description_paragraph === void 0 ? void 0 : description_paragraph.classList.add("description_paragraph");
        description_heading.textContent = "Description";
        description_paragraph.textContent = activity.description;
        description_section.append(description_heading);
        description_section.append(description_paragraph);
        activity_wrapper.append(description_section);
    }
    {
        const duration_range_section = document.createElement("section");
        duration_range_section === null || duration_range_section === void 0 ? void 0 : duration_range_section.classList.add("duration_range_section");
        const duration_range_heading = document.createElement("h3");
        duration_range_heading === null || duration_range_heading === void 0 ? void 0 : duration_range_heading.classList.add("duration_range_heading");
        const duration_range_ul = document.createElement("ul");
        duration_range_ul === null || duration_range_ul === void 0 ? void 0 : duration_range_ul.classList.add("duration_range_ul");
        const minimum_duration_li = document.createElement("li");
        minimum_duration_li === null || minimum_duration_li === void 0 ? void 0 : minimum_duration_li.classList.add("minimum_duration_li");
        const maximum_duration_li = document.createElement("li");
        maximum_duration_li === null || maximum_duration_li === void 0 ? void 0 : maximum_duration_li.classList.add("maximum_duration_li");
        duration_range_heading.textContent = "Duration Range";
        minimum_duration_li.textContent = `Minimum: ${activity.duration_range.min.toString()}`;
        maximum_duration_li.textContent = `Maximum: ${activity.duration_range.max.toString()}`;
        duration_range_ul.append(minimum_duration_li, maximum_duration_li);
        duration_range_section.append(duration_range_heading);
        duration_range_section.append(duration_range_ul);
        activity_wrapper.append(duration_range_section);
    }
    if (activity.required_focuses.length > 0) {
        const required_focus_section = document.createElement("section");
        required_focus_section === null || required_focus_section === void 0 ? void 0 : required_focus_section.classList.add("required_focus_section");
        const required_focus_heading = document.createElement("h3");
        required_focus_heading === null || required_focus_heading === void 0 ? void 0 : required_focus_heading.classList.add("required_focus_heading");
        const required_focus_ul = document.createElement("ul");
        required_focus_ul === null || required_focus_ul === void 0 ? void 0 : required_focus_ul.classList.add("required_focus_ul");
        required_focus_heading.textContent = "Focuses Requried";
        activity.required_focuses.forEach((focus) => {
            const focus_li = document.createElement("li");
            focus_li === null || focus_li === void 0 ? void 0 : focus_li.classList.add("focus_li");
            focus_li.textContent = ToCase.titleCase(focus);
            required_focus_ul.append(focus_li);
        });
        required_focus_section.append(required_focus_heading);
        required_focus_section.append(required_focus_ul);
        activity_wrapper.append(required_focus_section);
    }
    if (activity.required_devices.length > 0) {
        const required_items_section = document.createElement("section");
        required_items_section === null || required_items_section === void 0 ? void 0 : required_items_section.classList.add("required_items_section");
        const required_items_heading = document.createElement("h3");
        required_items_heading === null || required_items_heading === void 0 ? void 0 : required_items_heading.classList.add("required_items_heading");
        const required_items_ul = document.createElement("ul");
        required_items_ul === null || required_items_ul === void 0 ? void 0 : required_items_ul.classList.add("required_items_ul");
        required_items_heading.textContent = "Required Items";
        activity.required_devices.forEach((item) => {
            const item_li = document.createElement("li");
            item_li === null || item_li === void 0 ? void 0 : item_li.classList.add("item_li");
            item_li.textContent = ToCase.titleCase(item);
            required_items_ul.append(item_li);
        });
        required_items_section.append(required_items_heading);
        required_items_section.append(required_items_ul);
        activity_wrapper.append(required_items_section);
    }
    {
        const num_participants_section = document.createElement("section");
        num_participants_section === null || num_participants_section === void 0 ? void 0 : num_participants_section.classList.add("num_participants_section");
        const num_participants_heading = document.createElement("h3");
        num_participants_heading === null || num_participants_heading === void 0 ? void 0 : num_participants_heading.classList.add("num_participants_heading");
        const num_participants_ul = document.createElement("ul");
        num_participants_ul === null || num_participants_ul === void 0 ? void 0 : num_participants_ul.classList.add("num_participants_ul");
        const min_participants_li = document.createElement("li");
        min_participants_li === null || min_participants_li === void 0 ? void 0 : min_participants_li.classList.add("min_participants_li");
        const max_participants = document.createElement("li");
        max_participants === null || max_participants === void 0 ? void 0 : max_participants.classList.add("max_participants_li");
        num_participants_heading.textContent = "Number of Participants Needed";
        min_participants_li.textContent = `Minimum: ${activity.num_participants_needed.min.toString()}`;
        max_participants.textContent = `Maximum: ${activity.num_participants_needed.max.toString()}`;
        num_participants_ul.append(min_participants_li, max_participants);
        num_participants_section.append(num_participants_heading);
        num_participants_section.append(num_participants_ul);
        activity_wrapper.append(num_participants_section);
    }
    {
        const internet_section = document.createElement("section");
        internet_section === null || internet_section === void 0 ? void 0 : internet_section.classList.add("internet_section");
        const internet_heading = document.createElement("h3");
        internet_heading === null || internet_heading === void 0 ? void 0 : internet_heading.classList.add("internet_heading");
        const internet_paragraph = document.createElement("p");
        internet_paragraph === null || internet_paragraph === void 0 ? void 0 : internet_paragraph.classList.add("internet_paragraph");
        internet_heading.textContent = "Internet Connection Required?";
        internet_paragraph.textContent = Parser.parseStrFromBoolean(activity.needInternet, "Yes", "No");
        internet_section.append(internet_heading);
        internet_section.append(internet_paragraph);
        activity_wrapper.append(internet_section);
    }
    {
        const productive_section = document.createElement("section");
        productive_section === null || productive_section === void 0 ? void 0 : productive_section.classList.add("productive_section");
        const productive_heading = document.createElement("h3");
        productive_heading === null || productive_heading === void 0 ? void 0 : productive_heading.classList.add("productive_heading");
        const productive_paragraph = document.createElement("p");
        productive_paragraph === null || productive_paragraph === void 0 ? void 0 : productive_paragraph.classList.add("productive_paragraph");
        productive_heading.textContent = "Is It Productive?";
        productive_paragraph.textContent = activity.isProductive;
        productive_section.append(productive_heading);
        productive_section.append(productive_paragraph);
        activity_wrapper.append(productive_section);
    }
    {
        const enjoyment_level_section = document.createElement("section");
        enjoyment_level_section === null || enjoyment_level_section === void 0 ? void 0 : enjoyment_level_section.classList.add("enjoyment_level_section");
        const enjoyment_level_heading = document.createElement("h3");
        enjoyment_level_heading === null || enjoyment_level_heading === void 0 ? void 0 : enjoyment_level_heading.classList.add("enjoyment_level_heading");
        const enjoyment_level_paragraph = document.createElement("p");
        enjoyment_level_paragraph === null || enjoyment_level_paragraph === void 0 ? void 0 : enjoyment_level_paragraph.classList.add("enjoyment_level_paragraph");
        enjoyment_level_heading.textContent = "Enjoyment Level";
        enjoyment_level_paragraph.textContent = `${activity.enjoyment_level}/${Object.values(EnjoymentLevel).length / 2}`;
        enjoyment_level_section.append(enjoyment_level_heading);
        enjoyment_level_section.append(enjoyment_level_paragraph);
        activity_wrapper.append(enjoyment_level_section);
    }
    {
        const location_section = document.createElement("section");
        location_section === null || location_section === void 0 ? void 0 : location_section.classList.add("location_section");
        const location_heading = document.createElement("h3");
        location_heading === null || location_heading === void 0 ? void 0 : location_heading.classList.add("location_heading");
        const location_paragraph = document.createElement("p");
        location_paragraph === null || location_paragraph === void 0 ? void 0 : location_paragraph.classList.add("location_paragraph");
        location_heading.textContent = "Location:";
        location_paragraph.textContent = ToCase.titleCase(activity.required_place);
        location_section.append(location_heading);
        location_section.append(location_paragraph);
        activity_wrapper.append(location_section);
    }
    return activity_wrapper;
}
function main() {
    console.log('The page has finished loading!');
    globalThis.activities = activities;
    const activities_section = document.querySelector("section#activities_section");
    if (activities_section !== null) {
        showActivities(activities_section, ...globalThis.activities);
    }
    const focus_select = document.querySelector("select#focus_select");
    const items_select = document.querySelector("select#items_select");
    const required_place_select = document.querySelector("select#required_place_select");
    const min_duration_unit_select = document.querySelector("select#min_duration_unit_select");
    const max_duration_unit_select = document.querySelector("select#max_duration_unit_select");
    const enjoyment_level_select = document.querySelector("select#enjoyment_level_select");
    const is_productive_select = document.querySelector("select#is_productive_select");
    console.log({ focus_select, items_select, required_place_select });
    addEnumOptionsToSelection(focus_select, Focus, Focus.Visual);
    addEnumOptionsToSelection(items_select, Item, Item.Phone);
    addEnumOptionsToSelection(required_place_select, Place);
    addEnumOptionsToSelection(min_duration_unit_select, UnitOfTime, UnitOfTime.Minutes);
    addEnumOptionsToSelection(max_duration_unit_select, UnitOfTime, UnitOfTime.Minutes);
    addEnumOptionsToSelection(enjoyment_level_select, EnjoymentLevel, EnjoymentLevel.Pleasant);
    if (is_productive_select !== null)
        addEnumOptionsToSelection(is_productive_select, YesNoCheckbox, YesNoCheckbox.Either);
    function addActivity() {
        console.log("Adding activity");
        let name, description, duration_range, required_focuses = [], required_devices = [], num_participants_needed, needInternet, isProductive, enjoyment_level, required_place;
        const name_input = document.querySelector("input#activity_name_input");
        const description_input = document.querySelector("input#activity_description_input");
        const min_duration_amount_input = document.querySelector("input#min_duration_amount_input");
        const min_duration_unit_select = document.querySelector("select#min_duration_unit_select");
        const max_duration_amount_input = document.querySelector("input#max_duration_amount_input");
        const max_duration_unit_select = document.querySelector("select#max_duration_unit_select");
        const focus_select = document.querySelector("select#focus_select");
        const items_select = document.querySelector("select#items_select");
        const min_participants_input = document.querySelector("input#min_participants_input");
        const max_participants_input = document.querySelector("input#max_participants_input");
        const need_internet_checkbox = document.querySelector("input#need_internet_checkbox");
        const is_productive_checkbox = document.querySelector("input#is_productive_checkbox");
        const enjoyment_level_input = document.querySelector("input#enjoyment_level_input");
        const required_place_select = document.querySelector("select#required_place_select");
        name = name_input.value;
        description = description_input.value;
        duration_range = new NumRange(new Duration(parseInt(min_duration_amount_input.value), getEnumFromValue(UnitOfTime, min_duration_unit_select.selectedOptions[0].value)), new Duration(parseInt(max_duration_amount_input.value), getEnumFromValue(UnitOfTime, max_duration_unit_select.selectedOptions[0].value)));
        Array.from(focus_select.selectedOptions).map((option_element) => {
            const focus_enum = getEnumFromValue(Focus, option_element.value);
            required_focuses.push(focus_enum);
        });
        Array.from(items_select.selectedOptions).map((option_element) => {
            const item_enum = getEnumFromValue(Item, option_element.value);
            required_devices.push(item_enum);
        });
        num_participants_needed = new NumRange(parseInt(min_participants_input.value), parseInt(max_participants_input.value));
        needInternet = need_internet_checkbox.checked;
        isProductive = getEnumFromValue(YesNoCheckbox, Parser.parseStrFromBoolean(is_productive_checkbox.checked, YesNoCheckbox.Yes, YesNoCheckbox.No));
        enjoyment_level = getEnumFromValue(EnjoymentLevel, parseInt(enjoyment_level_input.value));
        required_place = getEnumFromValue(Place, required_place_select.selectedOptions[0].value);
        const activity = new Activity({
            name, description, duration_range, required_focuses, required_devices, num_participants_needed, needInternet, isProductive, enjoyment_level, required_place
        });
        globalThis.activities.push(activity);
        console.log(globalThis.activities);
        const activities_section = document.querySelector("section#activities_section");
        if (activities_section !== null) {
            showActivities(activities_section, activity);
        }
    }
    function getFilteredActivities() {
        console.log("Adding activity");
        let duration_range, required_focuses = [], required_devices = [], num_participants_needed, needInternet, isProductive, enjoyment_level, required_place;
        const min_duration_amount_input = document.querySelector("input#min_duration_amount_input");
        const min_duration_unit_select = document.querySelector("select#min_duration_unit_select");
        const max_duration_amount_input = document.querySelector("input#max_duration_amount_input");
        const max_duration_unit_select = document.querySelector("select#max_duration_unit_select");
        const focus_select = document.querySelector("select#focus_select");
        const items_select = document.querySelector("select#items_select");
        const min_participants_input = document.querySelector("input#min_participants_input");
        const max_participants_input = document.querySelector("input#max_participants_input");
        const need_internet_checkbox = document.querySelector("input#need_internet_checkbox");
        const is_productive_select = document.querySelector("select#is_productive_select");
        // const enjoyment_level_input = <HTMLInputElement> document.querySelector("input#enjoyment_level_input");
        const enjoyment_level_input = document.querySelector("select#enjoyment_level_select");
        const required_place_select = document.querySelector("select#required_place_select");
        duration_range = new NumRange(new Duration(parseInt(min_duration_amount_input.value), getEnumFromValue(UnitOfTime, min_duration_unit_select.selectedOptions[0].value)), new Duration(parseInt(max_duration_amount_input.value), getEnumFromValue(UnitOfTime, max_duration_unit_select.selectedOptions[0].value)));
        Array.from(focus_select.selectedOptions).map((option_element) => {
            const focus_enum = getEnumFromValue(Focus, option_element.value);
            required_focuses.push(focus_enum);
        });
        Array.from(items_select.selectedOptions).map((option_element) => {
            const item_enum = getEnumFromValue(Item, option_element.value);
            required_devices.push(item_enum);
        });
        num_participants_needed = new NumRange(parseInt(min_participants_input.value), parseInt(max_participants_input.value));
        needInternet = need_internet_checkbox.checked;
        isProductive = getEnumFromValue(YesNoCheckbox, is_productive_select.selectedOptions[0].value);
        isProductive = getEnumFromValue(YesNoCheckbox, is_productive_select.selectedOptions[0].value);
        enjoyment_level = getEnumFromValue(EnjoymentLevel, parseInt(enjoyment_level_select.selectedOptions[0].value));
        required_place = getEnumFromValue(Place, required_place_select.selectedOptions[0].value);
        console.log({ duration_range, required_focuses, required_devices, num_participants_needed, needInternet, isProductive, enjoyment_level, required_place });
        const filtered_activities = activities.filter((activity) => {
            console.log("\n\n" + activity.toString());
            if (duration_range.min.isLargerThanDuration(activity.duration_range.max) ||
                activity.duration_range.min.isLargerThanDuration(duration_range.max)) {
                console.log("Activity Out of Range");
                return false;
            }
            if (!activity.required_focuses.every((activity_focus) => {
                return required_focuses.includes(activity_focus);
            })) {
                console.log("Activity Needs Focus You Don't Have");
                return false;
            }
            if (!activity.required_devices.every((activity_device) => {
                return required_devices.includes(activity_device);
            })) {
                console.log("Activity Needs Device You Don't Have");
                return false;
            }
            if (num_participants_needed.min > activity.num_participants_needed.max ||
                activity.num_participants_needed.min > num_participants_needed.max) {
                console.log("Activity Needs Participants You Don't Have");
                return false;
            }
            if (activity.needInternet && !needInternet) {
                console.log("Activity Needs Internet You Don't Have");
                return false;
            }
            if (isProductive !== YesNoCheckbox.Either &&
                activity.isProductive !== isProductive) {
                console.log(activity.isProductive);
                console.log(isProductive);
                console.log("Activity Is Productive/Not Productive");
                return false;
            }
            if (activity.enjoyment_level < enjoyment_level) {
                console.log("Activity Is Not Fun Enough");
                return false;
            }
            if (required_place !== Place.Anywhere &&
                activity.required_place !== Place.Anywhere &&
                activity.required_place !== required_place) {
                console.log("Activity Is Not For Where You Are");
                return false;
            }
            return true;
        });
        return filtered_activities;
    }
    function searchForActivityButtonEvent() {
        const filtered_activities = getFilteredActivities();
        const activities_result_section = document.querySelector("#activities_result_section");
        if (activities_result_section !== null) {
            showActivities(activities_result_section, ...filtered_activities);
        }
        console.log("\n\n\nPOSSIBLE ACTIVITIES:\n");
        filtered_activities.forEach((activity) => {
            console.log(activity.toString());
        });
        console.log("\n\n\n");
        filtered_activities.forEach((activity) => {
            console.log(activity.name);
        });
    }
    function generateRandomActivityButtonEvent() {
        const filtered_activities = getFilteredActivities();
        if (filtered_activities.length <= 0) {
            console.log("No Activties");
        }
        else {
            console.log(Math.floor(Math.random() * filtered_activities.length));
            const random_activity_index = Math.floor(Math.random() * filtered_activities.length);
            const random_activity = filtered_activities[random_activity_index];
            const activities_result_section = document.querySelector("#activities_result_section");
            if (activities_result_section !== null) {
                showActivities(activities_result_section, random_activity);
            }
        }
    }
    const add_activity_button = document.querySelector("button#add_activity_button");
    if (add_activity_button !== null)
        add_activity_button.onclick = addActivity;
    const search_for_activity_button = document.querySelector("button#search_for_activity_button");
    if (search_for_activity_button !== null) {
        search_for_activity_button.onclick = searchForActivityButtonEvent;
    }
    ;
    const random_activity_button = document.querySelector("button#random_activity_button");
    if (random_activity_button !== null)
        random_activity_button.onclick = generateRandomActivityButtonEvent;
}
// (globalThis as any).activities = activities;
// console.log( (globalThis as any).activities[0] );
document.body.onload = main;
// const name: string = Input.getString("Enter the name of the activity: ");
// const description: string = Input.getString("Enter the description for the activity: ");
// const duration_range: NumRange<Duration> = Input.getDurationRange("Enter the minimum duration for this activity: ", "Enter the maximum duration for this activity: ");
// const required_focuses: Focus[] = Input.getMultipleEnumInputs<Focus>(Focus, "Enter a focus needed for this activity: ", "DONE");
// const required_items: Items[] = Input.getMultipleEnumInputs<Items>(Items, "Enter an item needed for this activity: ", "DONE");
// const num_participants_needed: NumRange<number> = Input.getIntRange("Enter the minimum amount of participants needed for this activity: ", "Enter the maximum amount of participants needed for this activity: ");
// const needInternet: boolean = Input.getBoolean("Do you need internet for this activity? (yes/no): ", "yes", "no");
// const isProductive: boolean = Input.getBoolean("Is this activity productive? (yes/no): ", "yes", "no");
// const enjoyment_level: number = Input.getInteger("Enter the enjoyment level of this activity: ");
// const required_place: Place = Input.getEnumValue(Place, "Enter the required place this activity needs to happen in: ");
// const activity: Activity = new Activity(name, description, duration_range, required_focuses, required_devices, num_participants_needed, needInternet, isProductive, enjoyment_level, required_place);
// console.log(activity.toString());
// const time_preference_range: NumRange<Duration> = Input.getDurationRange("Enter the minimum duration of time you have to do this activity: ", "Enter the maximum duration of time you have to do this activity: ");
// const focuses_have: Focus[] = Input.getMultipleEnumInputs<Focus>(Focus, "Enter a focus you can give for the activity: ", "DONE");
// const items_have: Items[] = Input.getMultipleEnumInputs<Items>(Items, "Enter an item you can use for this activity: ", "DONE");
// const participants_have_range: NumRange<number> = Input.getIntRange("Enter the minimum amount of participants you can have for this activity: ", "Enter the maximum amount of participants you can have for this activity: ");
// const hasInternet: boolean = Input.getBoolean("Do you have internet for this activity? (yes/no): ", "yes", "no");
// const wantsToBeProductive: YesNoCheckbox = Input.getEnumValue(YesNoCheckbox, "Do you want this activity to be productive? (Any/Yes/No): ");
// const enjoyment_level_wanted: number = Input.getInteger("What is the minimum enjoyment level you want for this activity: ");
// const place_at: Place = Input.getEnumValue(Place, "Enter the place you are in for this activity: ");
// const filtered_activities: Activity[] = activities.filter(
// 	(activity) => {
// 		console.log("\n\n" + activity.toString());
// 		if (
// 			time_preference_range.min.isLargerThanDuration(activity.duration_range.max) ||
// 			activity.duration_range.min.isLargerThanDuration(time_preference_range.max)
// 		) {
// 			console.log("Activity Out of Range");
// 			return false;
// 		}
// 		if (
// 			!activity.required_focuses.every(
// 				(activity_focus) => {
// 					return focuses_have.includes(activity_focus);
// 				}
// 			)
// 		) {
// 			console.log("Activity Needs Focus You Don't Have");
// 			return false;
// 		}
// 		if (
// 			!activity.required_devices.every(
// 				(activity_device) => {
// 					return items_have.includes(activity_device);
// 				}
// 			)
// 		) {
// 			console.log("Activity Needs Device You Don't Have");
// 			return false;
// 		}
// 		if (
// 			participants_have_range.min > activity.num_participants_needed.max ||
// 			activity.num_participants_needed.min > participants_have_range.max
// 		) {
// 			console.log("Activity Needs Participants You Don't Have");
// 			return false;
// 		}
// 		if (activity.needInternet && !hasInternet) {
// 			console.log("Activity Needs Internet You Don't Have");
// 			return false;
// 		}
// 		if (
// 			wantsToBeProductive !== YesNoCheckbox.Any &&
// 			activity.isProductive !== wantsToBeProductive
// 		) {
// 			console.log(activity.isProductive);
// 			console.log(wantsToBeProductive);
// 			console.log("Activity Is Productive/Not Productive");
// 			return false;
// 		}
// 		if (activity.enjoyment_level < enjoyment_level_wanted) {
// 			console.log("Activity Is Not Fun Enough");
// 			return false;
// 		}
// 		if (
// 			place_at !== Place.Anywhere &&
// 			activity.required_place !== Place.Anywhere &&
// 			activity.required_place !== place_at
// 		) {
// 			console.log("Activity Is Not For Where You Are");
// 			return false;
// 		}
// 		return true;
// 	}
// )
// console.log("\n\n\nPOSSIBLE ACTIVITIES:\n");
// filtered_activities.forEach(
// 	(activity) => {
// 		console.log(activity.toString());
// 	}
// )
// console.log("\n\n\n")
// filtered_activities.forEach(
// 	(activity) => {
// 		console.log(activity.name);
// 	}
// )
//# sourceMappingURL=index.js.map