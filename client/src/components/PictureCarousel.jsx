import React from 'react';
import CurrentImage from './CurrentImage.jsx';
import TitleInfo from './TitleInfo.jsx';
import Arrow from './Arrow.jsx';

class PictureCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }

    this.nextImage = this.nextImage.bind(this);
    this.previouseImage = this.previouseImage.bind(this);
  }

  nextImage() {
    const lastImage = this.props.images.length - 1;
    if (this.state.currentIndex !== lastImage) {
      this.setState({currentIndex: this.state.currentIndex += 1});
    } else {
      this.setState({currentIndex: 0});
    }
  }

  previouseImage() {
    const firstImage = 0;
    if (this.state.currentIndex !== firstImage) {
      this.setState({currentIndex: this.state.currentIndex -= 1});
    } else {
      this.setState({currentIndex: this.props.images.length - 1});
    }
  }

  render () {
    const imgArr = this.props.images;
    const current = this.state.currentIndex;
    const homeInfo = this.props.home;

    return (
      <div>
        <CurrentImage url={imgArr[current]}/>
        <TitleInfo home={homeInfo}/>
      </div>
    )
  }
}

export default PictureCarousel;