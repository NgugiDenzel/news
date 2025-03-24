import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getNews from './newsService'; 
import web3 from './assets/images/image-web-3-desktop.jpg';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const categories = ["general", "health", "business", "technology", "sports"];

function NewsSection({ category }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const articles = await getNews(category);
                setNews(articles.slice(0, 5)); 
            } catch (error) {
                console.error(`Error fetching ${category} news:`, error);
            }
        };
        fetchNews();
    }, [category]);

    if (news.length === 0) {
        return <div>Loading {category} news...</div>;
    }

    const featuredArticle = news[0]; 
    const otherArticles = news.slice(1); 

    return (
        <section className="my-10">
            <h2 className="text-4xl font-bold text-gray-900 border-b-4 pb-3 mb-6">
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>

            <div className="mb-6">
                <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={featuredArticle.urlToImage || web3} 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                        alt={featuredArticle.title} 
                    />
                </a>
                <h3 className="text-2xl font-semibold mt-3">{featuredArticle.title}</h3>
                <p className="text-gray-600 mt-2">{featuredArticle.description}</p>
                <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read More</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherArticles.map((article, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200"
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img 
                            src={article.urlToImage || web3} 
                            className="w-full h-40 object-cover rounded-t-lg" 
                            alt={article.title} 
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{article.title}</h3>
                            <p className="text-gray-600">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read More</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

NewsSection.propTypes = {
    category: PropTypes.string.isRequired,
};

function First() {
    const [topNews, setTopNews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    useEffect(() => {
        const fetchTopNews = async () => {
            const articles = await getNews("general"); 
            setTopNews(articles);
        };
        fetchTopNews();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % topNews.length);
        }, 10000); 

        return () => clearInterval(intervalId);
    }, [topNews]);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const currentArticle = topNews[currentIndex] || {};

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen`}> 
            <div className="p-4 flex justify-end">
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full border border-gray-300">
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
            
            <section className="container mx-auto px-6 py-10">
                <div className="mb-12">
                    <img src={currentArticle.urlToImage || web3} className=" rounded-xl shadow-lg" alt={currentArticle.title} />
                    <div className="mt-4">
                        <h1 className="text-5xl font-bold mb-3">{currentArticle.title}</h1>
                        <p className="text-gray-700 text-lg mb-4">{currentArticle.description}</p>
                        <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded text-lg">Read More</a>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6">
                {categories.map((category) => (
                    <NewsSection key={category} category={category} />
                ))}
            </div>
        </div>
    );
}

export default First;
