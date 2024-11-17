import React from "react";
import { Card, Modal, Row, Col, Carousel, Image } from "antd";
import { galleryCarouselContent, tiles } from "../utils/Data";
// import "./App.css"; // Import the CSS file

const Gallery = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [tileDetails, setTileDetails] = React.useState(null);

  const showDetails = (tile) => {
    setTileDetails(tile);
    setModalVisible(true);
  };

  return (
    <>
      {/* Carousel Section */}
      <Carousel autoplay className="carousel-section">
        {galleryCarouselContent.map((carousel) => (
          <div key={carousel.id}>
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${carousel.image})` }}
            >
              <div>
                <h2 className="carousel-title">{carousel.title}</h2>
                <p>{carousel.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Gallery Section */}
      <div className="gallery">
        {tiles.map((tile) => (
          <Card
            key={tile.id}
            hoverable
            onClick={() => showDetails(tile)}
            style={{ width: 240 }}
            cover={
              <img
                alt={tile.name}
                src={tile.images[0]} // Show the first image in the card
                className="card-cover"
              />
            }
          >
            <Card.Meta
              title={tile.name}
              description={tile.description.substring(0, 50) + "..."}
            />
          </Card>
        ))}
      </div>

      {/* Modal Section */}
      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
      >
        {tileDetails && (
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              {/* Carousel to show multiple images */}
              <Carousel autoplay>
                {tileDetails.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt={`${tileDetails.name} Image ${index + 1}`}
                      className="modal-image"
                    />
                  </div>
                ))}
              </Carousel>
            </Col>
            <Col xs={24} md={12}>
              <h2 className="modal-title">{tileDetails.name}</h2>
              <p className="modal-description">{tileDetails.description}</p>
              <p className="modal-price">{tileDetails.price}</p>
            </Col>
          </Row>
        )}
      </Modal>
    </>
  );
};

export default Gallery;
