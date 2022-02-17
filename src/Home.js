import Header from './components/Header';

const Home = () => (
  <div>
    <Header />
    <div className="homeContent">
      <h2>Welcome to Our Page</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
      </p>
      <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
);

export default Home;
