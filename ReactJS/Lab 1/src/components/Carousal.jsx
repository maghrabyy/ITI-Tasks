import { Component } from 'react';
import defaultPetImg from '../assets/animal-shelter.png';

export class Carousel extends Component {
  state = {
    imgIndex: 0,
  };
  static defaultProps = {
    images: [defaultPetImg],
  };
  render() {
    const { images } = this.props;
    const { imgIndex } = this.state;
    const activeClasses = 'border-2 border-orange-600';
    return (
      <div className="pet-images space-y-2">
        <div className="main-image">
          <img src={images[imgIndex]} className="rounded-md" alt="Pet image" />
        </div>
        <div className="pet-image flex flex-wrap justify-center gap-1">
          {images.map((img, index) => (
            <img
              className={`cursor-pointer w-10 lg:w-8 xl:w-10 ${imgIndex === index ? activeClasses : null}  rounded-md`}
              onClick={() => this.setState({ imgIndex: index })}
              key={img}
              src={img}
              alt="Pet image"
            />
          ))}
        </div>
      </div>
    );
  }
}
