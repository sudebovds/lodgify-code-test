export interface ITaskInterface{
    name: string;
}

export interface IGroupInterface{
    groupName: string;
    tasks: ITaskInterface[];
}