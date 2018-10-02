import Hero from '../components/Hero';
import Subscribe from '../components/Subscribe';
import ProductHuntBanner from '../components/ProductHuntBanner';
import Colors from '../components/Colors';

export default () => (
  <div>
    {' '}
    <div className="body">
      <ProductHuntBanner />
      <Hero />
    </div>
    <div className="content">
      <Subscribe />
      <Colors />
    </div>
    <footer>
      <p>
        A project by <a href="https://twitter.com/iamtekeste">@iamtekeste</a>
      </p>
      <p>
        Featured Dribbble shot is from
        <a href="https://dribbble.com/shots/4803813-Freedom"> Gal Shir</a> & Chrome icon is by
        <a href="https://thenounproject.com/sofiamoya/"> Sofía Moya</a>
      </p>
    </footer>
  </div>
);
