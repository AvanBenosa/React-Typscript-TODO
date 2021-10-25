class TaskModel {
  id:string;
  title: string;
  day: number;

  constructor(task:string, day:number, id:string){
    this.title = task;
    this.day = day;
    this.id = id;
  }
}

export default TaskModel;
