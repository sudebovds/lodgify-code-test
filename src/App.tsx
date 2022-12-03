import { useEffect, useState } from 'react'
import Group from './components/Group'
import Header from './components/Header'
import { GetData } from './api/getData.js'
import { IGroupInterface, ITaskInterface } from './types'
import { normolizeTasksValue } from './helpers'

function App() {
  const [mainData, setMainData] = useState<IGroupInterface[] | []>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newGorupData = GetData();

    newGorupData
    .then(data => {
      if(data.length > 0){
        let sum = 0;

        data.forEach((group: IGroupInterface) => {
          let localInitial = 0;

          let localSum = group.tasks.reduce((acc: number, current: ITaskInterface) => acc + current.value, localInitial);

          return sum += localSum
        });

        const normalisedData = data.map((group: IGroupInterface) => {
          const normolisedValues = group.tasks.map(task => {
            return {
              ...task,
              value: normolizeTasksValue(task.value, sum)
            }
            
          });
          return {
            ...group,
            tasks: normolisedValues
          }
       });

       setMainData(normalisedData);
      }
    })
    .catch(e => console.error(e))
  }, []);

  useEffect(() => {
    if(mainData.length > 0){
      let progressSum = 0;

      mainData.forEach((group: IGroupInterface) => {
        let localInitial = 0;

        let localSum = group.tasks.reduce((acc: number, current: ITaskInterface) => current.checked ? acc + current.value : acc +0, localInitial);

        return progressSum += localSum
      });

      setProgress(Math.round(progressSum))
    }
  }, [mainData])

   return (
    <div className="wrapper">
      {mainData.length > 0 ? <div className='widget'>
        <Header 
          progressValue={progress}
        />
        <main className='mainContent'>
          {
            mainData.map(group => (
              <Group 
                name={group.name}
                tasks={group.tasks}
                key={group.name}
                calculateProgress={setProgress}
              />
            ))
          }                
        </main>
      </div> : (
        <div className='error'>
          <h1>Sorry.</h1>
          <h2>We've faced with an issue.</h2>    
          <p>Please, take a look at the console.</p>    
        </div>
      )}
    </div>
  )
}

export default App
