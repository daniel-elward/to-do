export const arrayOfTasks = [];
export const arrayOfProjects = [];

class ToDoTask {

    constructor(title, description, dueDate, priority, notes) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    };
};

export function createTask(title, description, dueDate, priority, notes) {

    const newEntry = new ToDoTask(title, description, dueDate, priority, notes);

    arrayOfTasks.push(newEntry);
};