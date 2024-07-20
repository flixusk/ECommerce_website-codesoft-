import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Card from '../components/card';
import Product from '../components/product';





const Home = () => {
  const cards = [
    {
      title: 'The best clothes in one place',
      content: 'The most progressive clothing brands in one place. Brands that care about their mark on the planet and make clothes that last.',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      title: 'Every item is handpicked',
      content: 'We delve through public sustainability information to handpick the best essentials. If it’s on Snipe, it meets our very high standards.',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      title: 'Save hours of precious time',
      content: 'We do the research, so you don’t have to. That means you can buy clothes you’re proud of. From brands that share your unique values.',
      image: 'https://via.placeholder.com/400x300'
    }
  ];
  
  return (
    <div>
        <Navbar />
        <div className='bg-maincolor w-full flex flex-col items-center p-4'>
          <div className='text-center mb-6'>
            <h1 className="text-2xl font-bold mb-4">Handpicked. Sustainable. Essentials.</h1>
            <h3 className="text-lg mb-4">Find sustainable, everyday-essentials without 
              hours of research. We put the best brands front 
              and centre. So you get clothes that look great and 
              stand the test of time.
            </h3>
          </div>
          <div className='flex gap-4'>
          <button className="bg-transparent border-2 border-green-500 text-green-500 py-2 px-4 rounded hover:bg-green-500 hover:text-white transition-colors duration-300">Shop Essentials</button>
            <button className="bg-green-500 border border-green-700 text-white py-2 px-4 rounded hover:bg-green-600">Learn More</button>
          </div>
          <div className='w-full max-w-screen-xl mx-auto overflow-x-auto px-2 pt-16 pb-28'>
          <Carousel />
          </div>
        </div>
        <div className='pt-28'>
          <div className='text-center mb-8'>
            <h1 className="text-2xl font-bold">Why Snipe?</h1>
          </div>
          <div className='flex flex-wrap justify-center gap-6 p-4'>
            {cards.map((card, index) => (
              <Card
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
              />
            ))}
          </div>
        </div>
        <div className='bg-maincolor w-full flex flex-col items-center p-4'>
          <div className='text-center mb-4'>
            <h2 className="text-xl">New In</h2>
            <h1 className="text-2xl font-bold">Handpicked from the best</h1>
          </div>
          <div className='w-full max-w-4xl mx-auto overflow-x-auto px-2'>
            <Product />
          </div>
        </div>
    </div>
  )
}

export default Home;
