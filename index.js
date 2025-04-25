//#sumArray
function sumArray(numbers){
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const exampleArray1 = [1, 2, 3, 4, 5]
const sum = sumArray(exampleArray1)
console.log('Сума елементів масиву:', sum)

//#doubleArrayElements
function doubleArrayElements(numbers) {
	return numbers.map(number => number * 2);
}
const exampleArray2 = [1, 2, 3, 4, 5]
const doubledArray = doubleArrayElements(exampleArray2)
console.log('Подвоєні елементи масиву:', doubledArray)

//#SkillsManager

	// export class SkillsManager {
	// 	constructor() {
	// 		this.skills = [];
	// 	}
	// }
	
class SkillsManager{
	constructor() {
		this.skills = [];
	}
	addSkill(skill){
		if (typeof skill === 'string' && skill.trim().length >= 2){
			this.skills.push(skill.trim());
			return skill.trim();
		}
		return null;
	}
	getAllSkills(){
		return this.skills;
	}
}

const skillsManager = new SkillsManager()

console.log(skillsManager.addSkill('JavaScript'))
console.log(skillsManager.addSkill('CSS'))
console.log(skillsManager.addSkill('A'))
console.log(skillsManager.getAllSkills())

//# DateCalculator
function DateCalculator(initialDate) {
	let date = new Date(initialDate);

  this.addDays = function(days) {
    date.setDate(date.getDate() + days);
  };
	this.subtractDays = function(days) {
    date.setDate(date.getDate() - days);
  };

	this.getResult = function() {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2,'0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year} - ${month} - ${day}`;
	};
}

const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult())

dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult())


