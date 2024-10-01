import logo from './assets/images/logo.svg'
// import  { useState, useEffect } from 'react';
// import getNews from './NewsService';




function Dashboard(){

    //   const [news, setNews] = useState([]);
    //   const [category, setCategory] = useState('general');
    
    //   useEffect(() => {
    //     const fetchNews = async () => {
    //       const articles = await getNews(category);
    //       setNews(articles);
    //     };
    //     fetchNews();
    //   }, [category]);
    return(
    //         <div className="min-h-screen bg-gray-100">
    //   <div className="flex flex-col">
    //     <header className="bg-blue-500 p-4 text-white text-center text-xl font-bold">
    //       Dashboard
    //     </header>
        <nav className="bg-white p-2 text-black flex">
        <img className='mr-80' src={logo}/>
        <ul>
        

        {/* Add more links here as needed */}
      </ul>


          <a href="/general" className="hover:text-red-600 p-2 rounded">General</a>
          <a href="#" className="hover:text-red-600 p-2 rounded">Business</a>
          <a href="#" className="hover:text-red-600 p-2 rounded">Technology</a>
          <a href="#" className="hover:text-red-600 p-2 rounded">Health</a>
          <a href="#" className="hover:text-red-600 p-2 rounded">Sports</a>
          
        </nav>

       
    )
}
export default Dashboard;