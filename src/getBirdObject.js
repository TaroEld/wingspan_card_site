
const getBirdObject = function(_stats)
{
    const statsObj = {
        name :              "",
        scientificName :    "",
        expansionSet:       "core",
        food :              "", 
        foodSeparator :     "+",
        foodSpecial:        false,
        habitat :           "",
        vpNum :             0,
        eggNum :            0,
        nestType :          "",
        wingspanNum :       0,
        flavorText:         "",
        effectText :        "",
        effectType :        "None",
        effectTag  :        "",
        predator   :        false,
        flocking   :        false,
        bonusCard  :        false,
    }
    for (const [key, value] of Object.entries(_stats)){
        if (value === null)
            continue;
        if (key in statsObj)
        {
            statsObj[key] = value;
            continue;
        }
        const lowerCaseKey = key[0].toLowerCase() + key.slice(1)
        if (lowerCaseKey in statsObj)
        {
            statsObj[lowerCaseKey] = value;
            continue;
        }
        console.log(`Passed invalid key: ${key}`)
    }
    if (typeof statsObj.food === "string")
        statsObj.food = statsObj.food.split(" ")
    if (typeof statsObj.habitat === "string")
        statsObj.habitat = statsObj.habitat.split(" ")
    if (statsObj.nestType.length > 0)
        statsObj.nestType = statsObj.nestType[0].toUpperCase() + statsObj.nestType.slice(1)
    return statsObj
}

export default getBirdObject