class SkillsManager {
  constructor() {
    this.skills = []; 
  }

  addSkill(skill) {
    if (typeof skill === 'string' && skill.trim().length >= 2) {
      this.skills.push(skill.trim());
      return skill.trim();
    }
    return null;
  }

  getAllSkills() {
    return this.skills;
  }
}

export default SkillsManager;