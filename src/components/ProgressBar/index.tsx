import styled, { keyframes } from 'styled-components'

//Styles
import './style.css'

const ProgressBar = ({ progressValue = 68}: {progressValue: number}) => {
  const loading = keyframes`
    from {
      width: 0%;
    }
    to {
      width: ${progressValue}%;
    }
  `;

  const ProgressBarValue = styled.div`
    animation: ${loading} 3s normal forwards;
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
          <ProgressBarValue>{`${progressValue}%`}</ProgressBarValue>
      </div> 
    </>
  )
}

export default ProgressBar