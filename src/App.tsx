import { useState } from 'react'
import Group from './components/Group'
import Header from './components/Header'
import { Content } from './content'

function App() {
   return (
    <div className="wrapper">
      <div className='widget'>
        <Header 
          progressValue={75}
        />
        <main className='mainContent'>
          {
            Content.map(group => (
              <Group 
                groupName={group.groupName}
                tasks={group.tasks}
              />
            ))
          }                
        </main>
      </div>
    </div>
  )
}

export default App
