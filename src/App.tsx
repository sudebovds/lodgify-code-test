import React, { useEffect, useState } from 'react';
import Group from './components/Group';
import Header from './components/Header';
import { GetData } from './api/getData';
import { TGetDataType } from './types';
import { getNormolizedData } from './helpers';
import ErrorComponent from './components/ErrorComponent';

const App: React.FC = () => {
  const [mainData, setMainData] = useState<TGetDataType[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    const newGorupData = GetData();

    newGorupData
      .then((data: TGetDataType[]) => {
        if (data.length > 0) {
          const [normalisedData, localProgress] = getNormolizedData(data);

          setProgress(Math.round(localProgress));
          setMainData(normalisedData);
          setLoading(false);
        } else {
          throw new Error();
        }

        return;
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="wrapper">
      {loading ? <h3>loading...</h3> : null}
      {mainData.length > 0 && !loading ? (
        <div className="widget">
          <Header progressValue={progress} />
          <main className="mainContent">
            {mainData.map((group, i) => (
              <Group
                name={group.name}
                tasks={group.tasks}
                key={group.name}
                calculateProgress={setProgress}
                index={i}
              />
            ))}
          </main>
        </div>
      ) : (
        error && !loading && <ErrorComponent />
      )}
    </div>
  );
};

export default App;
