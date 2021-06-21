import JobBoardComponent from "./components/JobBoardComponent";
import data from './assets/data.json'
import { useState, useEffect } from 'react'
function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(data)
  }, []);

  const filterByTag = (jobs) => {
    return jobs.filter(job => {
      return job
    })
  }

  
  return (
    <div className="App px-3.5">
      {
        jobs.length === 0 ? (
          <p>
            Jobs are fetching
          </p>
        ) : (
          jobs.map(job => (
            <JobBoardComponent job={job} key={job.id} />
          ))
        )
      }
    </div>
  );
}

export default App;
