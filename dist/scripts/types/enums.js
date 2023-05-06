import { Validator } from '../utilities/Validator.js';
export var UnitOfTime;
(function (UnitOfTime) {
    UnitOfTime["Seconds"] = "SECONDS";
    UnitOfTime["Minutes"] = "MINUTES";
    UnitOfTime["Hours"] = "HOURS";
    UnitOfTime["Days"] = "DAYS";
    UnitOfTime["Weeks"] = "WEEKS";
    UnitOfTime["Months"] = "MONTHS";
    UnitOfTime["Years"] = "YEARS";
})(UnitOfTime || (UnitOfTime = {}));
export var Focus;
(function (Focus) {
    Focus["Textual"] = "TEXTUAL";
    Focus["Visual"] = "VISUAL";
    Focus["Auditory"] = "AUDITORY";
    Focus["Engagement"] = "ACTIVE";
    Focus["Social"] = "SOCIAL";
})(Focus || (Focus = {}));
export var Item;
(function (Item) {
    Item["Phone"] = "PHONE";
    Item["Computer"] = "COMPUTER";
    Item["VR"] = "VR";
    Item["GameConsole"] = "GAME CONSOLE";
})(Item || (Item = {}));
export var Place;
(function (Place) {
    Place["Home"] = "HOME";
    Place["Outdoors"] = "OUTDOORS";
    Place["School"] = "SCHOOL";
    Place["Anywhere"] = "ANYWHERE";
})(Place || (Place = {}));
export var YesNoCheckbox;
(function (YesNoCheckbox) {
    YesNoCheckbox["Either"] = "Either";
    YesNoCheckbox["Yes"] = "Yes";
    YesNoCheckbox["No"] = "No";
})(YesNoCheckbox || (YesNoCheckbox = {}));
export var EnjoymentLevel;
(function (EnjoymentLevel) {
    EnjoymentLevel[EnjoymentLevel["Unpleasent"] = 0] = "Unpleasent";
    EnjoymentLevel[EnjoymentLevel["Boring"] = 1] = "Boring";
    EnjoymentLevel[EnjoymentLevel["Mediocre"] = 2] = "Mediocre";
    EnjoymentLevel[EnjoymentLevel["Pleasant"] = 3] = "Pleasant";
    EnjoymentLevel[EnjoymentLevel["Enjoyable"] = 4] = "Enjoyable";
    EnjoymentLevel[EnjoymentLevel["SuperFun"] = 5] = "SuperFun";
})(EnjoymentLevel || (EnjoymentLevel = {}));
export function getEnumFromValue(enum_obj, value) {
    Validator.isEnumValueInEnum(enum_obj, value);
    return value;
}
//# sourceMappingURL=enums.js.map