import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import { SearchField } from './components/SearchField'
import { Issues } from './components/Issues'
import { Loading } from './components/Loading'

function App() {

  const [search, setSearch] = useState('')
  const [issues, setIssues] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filterIssues = issues.filter(issue => issue.title.toLowerCase().includes(search.toLocaleLowerCase()))

  const getIssuesRequest = () => {
    const dataRequest = axios.get('https://api.github.com/repos/facebook/react/issues')
    dataRequest.then(response => {
      const { data } = response;
      setIssues(data)
      setIsLoading(false)
    }).catch(e => alert(e.message))
  }

  useEffect(() =>{
    setTimeout(() => getIssuesRequest(), 1000)
  }, [])

  return (
    <div className="App">
     <SearchField handleChange={handleChange} value={search} results={filterIssues.length}/>
     {
       !isLoading ? <Issues issues={filterIssues} /> : <Loading />
     }
    </div>
  );
}

export default App;
