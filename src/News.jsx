import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getNews from './newsService';

function NewsList() {
  const { category } = useParams(); 
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getNews(category);
      setNews(articles);
      setCurrentIndex(0); 
    };
    fetchNews();
  }, [category]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [news]);

  if (news.length === 0) {
    return <p>Loading...</p>;
  }

  const currentArticle = news[currentIndex];

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <div>
        <h2>{currentArticle.title}</h2>
        <p>{currentArticle.description}</p>
        <a href={currentArticle.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsList;







// // import  { useState, useEffect } from 'react';
// // import getNews from './NewsService';

// // function NewsList() {
// //   const [news, setNews] = useState([]);
// //   const [category, setCategory] = useState('general');

// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       const articles = await getNews(category);
// //       setNews(articles);
// //     };
// //     fetchNews();
// //   }, [category]);
// import  { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import getNews from './newsService';

// function NewsList() {
//   const { category } = useParams();  // Get the category from the URL
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const articles = await getNews(category);
//       setNews(articles);
//     };
//     fetchNews();
//   }, [category]);

//   return (
//     <div>
//       <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
//       <ul>
//         {news.map((article, index) => (
//           <li key={index}>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               {article.title}
//             </a>
//             <p>{article.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
//     // <div>
//     //   <h1>Top News</h1>
//     //   <select onChange={(e) => setCategory(e.target.value)}>
//     //     <option value="general">General</option>
//     //     <option value="business">Business</option>
//     //     <option value="technology">Technology</option>
//     //     <option value="health">Health</option>
//     //     <option value="sports">Sports</option>
//     //   </select>
//     //   <ul>
//     //     {news.map((article, index) => (
//     //       <li key={index}>
//     //         <a href={article.url} target="_blank" rel="noopener noreferrer">
//     //           {article.title}
//     //         </a>
//     //         <p>{article.description}</p>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
 
// }

// export default NewsList;
