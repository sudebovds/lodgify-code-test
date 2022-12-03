type NormaliseType = (value: number, sum: number) => number;

export const normolizeTasksValue: NormaliseType = (value, sum) => {
    return parseFloat(((value * 100) / sum).toFixed(2))
}