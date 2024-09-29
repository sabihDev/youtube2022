import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
// import useFetch from "../../hooks/useFetch";

const featuredItems = [
  {
    id: 1,
    attributes: {
      title: "Stylish Jacket",
      price: 120.0,
      oldPrice: 150.0,
      isNew: true,
      mainImage: {
        url: "https://via.placeholder.com/300x400?text=Stylish+Jacket+Main"
      },
      secondImage: {
        url: "https://via.placeholder.com/300x400?text=Stylish+Jacket+Second"
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Classic Watch",
      price: 85.0,
      oldPrice: 100.0,
      isNew: false,
      mainImage: {
        url: "https://via.placeholder.com/300x400?text=Classic+Watch+Main"
      },
      secondImage: {
        url: "https://via.placeholder.com/300x400?text=Classic+Watch+Second"
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Running Shoes",
      price: 95.0,
      oldPrice: 110.0,
      isNew: true,
      mainImage: {
        url: "https://via.placeholder.com/300x400?text=Running+Shoes+Main"
      },
      secondImage: {
        url: "https://via.placeholder.com/300x400?text=Running+Shoes+Second"
      }
    }
  },
  {
    id: 4,
    attributes: {
      title: "Leather Handbag",
      price: 140.0,
      oldPrice: 160.0,
      isNew: false,
      mainImage: {
        url: "https://via.placeholder.com/300x400?text=Leather+Handbag+Main"
      },
      secondImage: {
        url: "https://via.placeholder.com/300x400?text=Leather+Handbag+Second"
      }
    }
  },
];



const FeaturedProducts = ({ type }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][type][$eq]=${type}`
//   );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {
          featuredItems.map((item) => (
            <Card item={item} key={item.id} />
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;