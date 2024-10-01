import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getNews from './newsService'; // Ensure this points to your news fetching service
import web3 from './assets/images/image-web-3-desktop.jpg';

function First({ category }) {
    const [news, setNews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [componentNews, setComponentNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const articles = await getNews(category);
            setNews(articles);
            console.log(articles);

            setCurrentIndex(0); // Reset to the first news item when the category changes
            setComponentNews(articles.slice(0, 3)); // Get the first three articles for the component-one section
        };
        fetchNews();
    }, [category]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
        }, 5000); // Change news item every 5 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [news]);

    const currentArticle = news[currentIndex] || {};
    

    return (
        <div className="flex mb-10">
            <div className='md:basis-2/3'>
            <img src={currentArticle.urlToImage || web3 } className='mb-8' alt={currentArticle.title }/>
                
                <div className='grid grid-cols-1'>
                   
                        <section>
                            <h2>{currentArticle.title}</h2>
                            <p>{currentArticle.description}</p>
                            <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" className='bg-red-400 px-8 py-2 inline-block mt-4'>R E A D  M O R E</a>
                        </section>
                </div>
            </div>
            
            <div id='component-one' className='bg-blue-950 md:basis-1/3 ml-8 text-white px-8 '>
                <br/>
                <h1 className='text-4xl text-orange-400'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <br/>

                {componentNews.map((article, index) => (
                    <div key={index}>
                        <h2 className='text-xl'>{article.title}</h2>
                        
                        <p>{article.description}</p>
                        
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className='text-orange-400'>Read More</a>
                        
                        {index < componentNews.length - 1 && <hr className="my-4"/>} {/* Add a separator between articles */}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Adding prop types validation
First.propTypes = {
  category: PropTypes.string.isRequired, // Validates that category is a required string
};

export default First;
