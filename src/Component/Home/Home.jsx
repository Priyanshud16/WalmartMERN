import React, { useEffect } from 'react';
import Navbar from './Navbar';
import HomeBanner from './HomeBanner/HomeBanner';
import { getProducts } from '../../Redux/action/ProductsAction';
import { useDispatch ,useSelector} from 'react-redux';

import SlideCarousel from './Slide';
import MidSection from './MidSection';

function HomePage() {
    const dispatch = useDispatch();
const {products}= useSelector(state=>state.getProducts)
console.log(products);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]); // Include dispatch in the dependency array

    return (
        <div>
            <Navbar />
            <HomeBanner />
           <SlideCarousel products={products} title="Deal of the Day" timer={true}/>
           <MidSection/>
           <SlideCarousel products={products} title="Discount for You" timer={false}/>
           <SlideCarousel products={products} title="Sugested Items" timer={false}/>
           <SlideCarousel products={products} title="Top Selection" timer={false}/>
           <SlideCarousel products={products} title="Recommended Items" timer={false} />
           <SlideCarousel products={products} title="Trending Offers"  timer={false}/>
           <SlideCarousel products={products} title="Session's Top Pics" timer={false} />
           <SlideCarousel products={products} title="Top Deals on Accessories View" timer={false} />
        </div>
    );
}

export default HomePage;
