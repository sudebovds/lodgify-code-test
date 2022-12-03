export interface ITaskInterface{
    description: string;
    checked: boolean;
    value: number;
    calculateProgress: React.Dispatch<React.SetStateAction<number>>
}

export interface IGroupInterface{
    name: string;
    tasks: ITaskInterface[];
    index?: number;
    calculateProgress: React.Dispatch<React.SetStateAction<number>> 
}