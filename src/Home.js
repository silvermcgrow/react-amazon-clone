import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg" alt="" />

            {/* Product: id,name,image,rating and button */}
            <div className="home_row">
                <Product id="1111"
                    title="Baby Double Sided Water Proof Mat with Zip Lock Bag for Babies to Crawl Play Mat Easy Portable Gym Carpet"
                    price={100.20} 
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71YQD8zfCkL._AC_UL320_.jpg"
                />
                <Product id="2222"
                    title="Supples Baby Pants Diapers, Large (9-14 kg), 62 Count"
                    price={514}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61NWAh5XvbL._AC_UL320_.jpg"
                />
            </div>
            <div className="home_row">
                <Product id="3333"
                    title="Amardeep and Co Toddler Mattress with Mosquito Net (Pink) - MT-01-Pink"
                    price={239}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/5189QAHawQL._AC_UL320_.jpg"
                />
                <Product id="4444"
                    title="MY NEWBORN Baby Boys and Baby Girls 3 in 1 Baby Blanket-Wrapper-Sleeping Bag Pack of 2 pcs"
                    price={477}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41k2d1SSl4L._AC_UL320_.jpg"
                />
                <Product id="5555"
                    title="Bey Bee Water Resistant Bed Protector Baby Dry Sheet with Ultra absorbance (RoyalBlue/Maroon)"
                    price={560}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81V5fwqEy-L._AC_UL320_.jpg"
                />
            </div>
            <div className="home_row">
                <Product id="6666"
                    title="eAirtec 102 cm (40 inches) HD Ready Smart Certified Android LED TV 40DJSM (Black) (2020 Model)"
                    price={9020}
                    rating={5}
                    image="https://m.media-amazon.com/images/S/aplus-media/vc/1c436e3d-6f15-4886-8bab-37d01817b2f7.__CR0,0,970,300_PT0_SX970_V1___.jpg"
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
