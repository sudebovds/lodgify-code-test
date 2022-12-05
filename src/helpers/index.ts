import { ITaskInterface, TGetDataType } from './../types/index';

type TNormaliseType = (value: number, sum: number) => number;
type TGetNormolizedDataType = (
  data: TGetDataType[]
) => [TGetDataType[], number];

export const normolizeTasksValue: TNormaliseType = (value, sum) => {
  return parseFloat(((value * 100) / sum).toFixed(2));
};

export const getNormolizedData: TGetNormolizedDataType = (data) => {
  let sum = 0;

  data.forEach((group: TGetDataType) => {
    const localInitial = 0;

    const localSum = group.tasks.reduce(
      (acc: number, current: ITaskInterface) => acc + current.value,
      localInitial
    );

    return (sum += localSum);
  });

  let localProgress = 0;

  const normalisedData = data.map((group: TGetDataType) => {
    const normolisedValues = group.tasks.map((task) => {
      const nval = normolizeTasksValue(task.value, sum);

      task.checked ? (localProgress += nval) : (localProgress += 0);

      return {
        ...task,
        value: normolizeTasksValue(task.value, sum),
      };
    });
    return {
      ...group,
      tasks: normolisedValues,
    };
  });

  return [normalisedData, localProgress];
};
