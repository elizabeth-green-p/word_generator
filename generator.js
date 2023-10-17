const nameGen =['Yardrol', 'Baetix', 'Sylvanas Windrunner', 'Jack', 'Beelzebub', 'Lady Gaga', 'Fireman Sam', 'Elizabeth','Rumplestiltskin','Barbie','Inigo Montoya','Shera Princess of Power','Ebony darkness dementia raven way','Captain Benjamin Sisko','Bella Swan'];
const race =['Orc', 'Human','Dark Elf','Ent','Halfling','Dwarf','Dragonborn','Borg','Half fish half human but the fish is the top half','sentient makeup brush','vampire','werewolf','shapeshifter','fairy','dog'];
const place=['Nashville Tennessee', 'Kalmidor','Middle Earth','The delta quadrant','the edge of the universe','the place where the lost socks go','the great undending void of space','Titan','Andromeda','Forks, Washington','Carvahall','Discworld','Croydon','A wetherspoons bathroom','The depths of Tartarus'];
const classType=['programmer','starfleet pilot','ranger','paladin','Warchief','Jedi','Swordsman','Knight','mage','bard','hunter','assassin','druid','line cook','substitute teacher'];
const weapon=['Dread Sword','keyboard','mark 3 phaser rifle', 'Wooden Spoon', 'Warhammer','Keen Wit','extensive knowledge of the star trek franchise','copy of the art of war by sun tzu','two handed long sword','heaven blessed staff','mace','flaming bow','the friends we made along the way','pair of enchanted knitting needles','haunted sword'];
const skill=['necromancy','combustion magic','dark magic','coding','stealth','mixology','dragon husbandry','telepathy','telekenesis','chopping an onion without crying..at least not a lot','lifting mjolnir','freehand drawing a circle','smiley face stick and poke tattoos','reciting the lyrics to smells like teen spirit by nirvana from memory','always winning arguments'];
const enemy=['The Cardassians','The Horde','The Alliance','The Klingons','The cullens','The french','The department for work and pensions','people who wear crocs','restaurant managers','The minions from despicable me','The government','The sith','The NRA','1 horse sized duck or 20 duck sized horses','The beatles'];
const villain=['The darkness within us all','Thanos','Your french teacher from school','Beelthezor the Broken','Hiram McDaniels','Bob the Builder','The teletubbies','Maleficent','Hades','Galbatorix','Robbie Rotten','Dr. Doofenschmirtz','Doug dimmadome owner of the dougsdale dimmadome','sexy squidward','That guy standing behind you'];
const battleCry=['Hazaa!','For the Horde!','Lets go girls!','Powerpuffs save the day','Make it so!','Avengers Assemble!','Azarath metrion zinthos!','Excelsior!','For Honour!','For the glory of the empire!','This is sparta!','Here goes nothing!','Team rocket are blasting off again!','Woohoo!','Giddyup Partner!']
const batch=[nameGen,race,place,classType,weapon,skill,enemy,villain, battleCry];

const generator =()=>{
    let choiceArr=[];
    for (let i=0;i<9;i++){
        let choice=Math.floor(Math.random()*15);
        choiceArr.push(batch[i][choice]);
    }
    console.log(`Your name is ${choiceArr[0]}.`);
    console.log(`You are a ${choiceArr[1]} from the land of ${choiceArr[2]}`);
    console.log(`As a ${choiceArr[3]} your preferred weapon is a ${choiceArr[4]} and your special skill is ${choiceArr[5]}`);
    console.log(`This is the beginning of your grand quest to defeat ${choiceArr[6]} and thwart ${choiceArr[7]}'s plans to conquer the world.`);
    console.log('Good Luck!');
    console.log(choiceArr[8]);

}
generator();