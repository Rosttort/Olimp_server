module.exports = class ReplyDto {
    member;
    olimp;
    conditions;
    author_answers;
    answers;
    marks;
    check;
    score;
    team;

    constructor(model) {
        this.member = model.member;
        this.olimp = model.olimp;
        this.conditions = model.condition;
        this.author_answers = model.author_answer;
        this.answers = model.answers;
        this.marks = model.marks;
        this.check = model.check;
        this.score = model.score;
        this.team = model.team;
    }   
}