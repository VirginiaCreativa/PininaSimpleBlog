import React, { Component } from 'react';
import Img from '../components/UI/Image/Image';
import LayoutSobre from '../components/SobreMi/SobreMi';
import HeadingTitle from '../components/UI/HeadingTitle/HeadingTitle';
import perfilVirginia from '../assets/images/pinina.jpg';

class About extends Component {
  state = {
    details: 2,
  };

  render() {
    return (
      <>
        <HeadingTitle title="Sobre Mí" detailsHead={this.state.details} />
        <Img srcImg={perfilVirginia} altImg="Virginia" />
        <LayoutSobre>
          <p>
            There’s nothing quite as frightening as the unknown. These words of
            former US Secretary of Defense Donald Rumsfeld should be truly
            terrifying (although the general consensus at the time was that they
            sounded like nonsense).There’s nothing quite as frightening as the
            unknown. These words of former US Secretary of Defense Donald
            Rumsfeld should be truly terrifying (although the general consensus
            at the time was that they sounded like nonsense).
          </p>
          <blockquote>
            <p>
              &quot;Donec eget ipsum sagittis, varius leo non, mattis eros.Donec
              eleifend, urna ut elementum tincidunt, velit nibh pulvinar odio,
              ac tristique mauris magna sit amet arcu.Aenean vestibulum gravida
              rutrum.Morbi vel augue a lectus ultricies varius nec elit.&quot;
            </p>
          </blockquote>
          <p>
            Design works within constraints. The Columban monks who crafted the
            Book of Kells worked with four inks on vellum, a material made of
            calfskin. The materials were simple but clearly defined. The
            cenobitic designers knew the hues of the inks, the weight of the
            vellum, and crucially, they knew the dimensions of each page.
          </p>
          <p>
            Suspendisse eleifend nulla ac rhoncus egestas. Sed vehicula ipsum
            vitae finibus condimentum. Phasellus rhoncus, nulla et sodales
            sodales, massa nisl volutpat odio, ac sodales risus metus
            sollicitudin odio.
          </p>
        </LayoutSobre>
      </>
    );
  }
}

export default About;
