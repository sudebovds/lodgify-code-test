import React, { keyframes } from 'styled-components';
import { ProgressBarValue } from './ProgressBarValue';

//Styles
import './style.css';

type TProgressValueType = { progressValue: number };

const ProgressBar = ({ progressValue = 0 }: TProgressValueType) => {
  const loading = keyframes`
    from {
      width: 0%;
    }
    to {
      width: ${progressValue}%;
    }
  `;

  return (
    <>
      <div className="progress">
        <ProgressBarValue $lodaingScale={loading}>
          {`${progressValue <= 100 ? progressValue : 100}%`}
        </ProgressBarValue>
      </div>
    </>
  );
};

export default ProgressBar;
