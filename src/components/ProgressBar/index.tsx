import styled, { keyframes } from 'styled-components'

//Styles
import './style.css'

type TProgressValueType = {progressValue: number};

const ProgressBar = ({ progressValue = 0}: TProgressValueType) => {
  const loading = keyframes`
    from {
      width: 0%;
    }
    to {
      width: ${progressValue}%;
    }
  `;  

  const ProgressBarValue = styled.div`
    animation: ${loading} 1.5s normal forwards;
    display: flex;
    justify-content: end;
    align-items: center;
    align-content: center;
    padding-right: 15px;
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 24px;
    background: var(--greenProgress);
    height: 24px;
    color: white;
  `;

  return (
    <>
      <div className='progress'>
          <ProgressBarValue>{`${progressValue <= 100 ? progressValue : 100}%`}</ProgressBarValue>
      </div> 
    </>
  )
}

export default ProgressBar