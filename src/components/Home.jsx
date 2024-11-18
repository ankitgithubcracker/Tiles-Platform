import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "antd";
import { homeCarouselContent, productCategories } from "../utils/Data";
// import "./App.css"; // Import the CSS file


const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Carousel Section */}
      <Carousel autoplay className="carousel-container">
        {homeCarouselContent.map((carousel, index) => (
          <div key={index}>
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${carousel.image})` }}
            >
              <div className="carousel-content">
                <h2 className="carousel-title">{carousel.title}</h2>
                <p className="carousel-description">{carousel.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Product Categories Section */}
      <div className="product-categories">
        <h2 className="product-categories-title">Product Categories</h2>
        <div className="product-categories-container">
          {productCategories.map((product) => (
            <Card
              key={product.id}
              hoverable
              className="product-card"
              onClick={() => handleCardClick(product)}
            >
              {/* Background Image */}
              <div
                className="product-card-image"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              {/* Overlay for Details */}
              <div className="product-card-overlay">
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-description">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for Product Details */}
      <Modal
        title={selectedProduct?.name}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
        width={800} // Wider modal for side-by-side layout
      >
        <div className="modal-container">
          {/* Image Section */}
          <div
            className="modal-image"
            style={{ backgroundImage: `url(${selectedProduct?.image})` }}
          ></div>

          {/* Details Section */}
          <div className="modal-details">
            <h3 className="modal-title">{selectedProduct?.name}</h3>
            <p className="modal-description">{selectedProduct?.details}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
