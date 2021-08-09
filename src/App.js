import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/ui/header'
import Search from './components/ui/search'
import Pagination from './components/ui/pagination'
import CharacterGrid from './components/characters/CharacterGrid'
function App() {
 
  const[items, setItems] = useState([]);
   // for, if data is loaded or not when we are fetching it
  const[isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
   

  const[currentPage, setCurrentPage] = useState(1);
  const[postPerPage] = useState(10);
  
    useEffect(() => {
      const fetchItems = async () => {
        
         //we need to put in query whatever we are fetching
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

        
        setItems(result.data)
        setIsLoading(false)
      }

      fetchItems();
    }, [query])

    //get current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)


    //Change Page
     const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="App">
    <Header />
    <Search  getQuery = {(q) => setQuery(q)}/>
    <CharacterGrid isLoading={isLoading}  items={currentPosts} />
    <Pagination postPerPage={postPerPage} totalPosts={items.length} paginate={paginate} />
    </div>
  );
}

export default App;
