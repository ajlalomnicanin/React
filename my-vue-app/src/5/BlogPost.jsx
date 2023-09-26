import "./blogPost.css";

const BlogPost = () => {
  return (
    <div className="main">
      <div className="left">
        <h3>CATEGORY</h3>
        <p style={{ color: "gray" }}>12 Jun 2019</p>
      </div>
      <div className="right">
        <h1>Bitters hashtag waistcoat fashion axe chia unicorn</h1>
        <p>
          Glossier echo park pug, church-key sartorial biodiesel vexillologist
          pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
          selfies, poke vaporware kombucha lumbersexual pork belly polaroid
          hoodie portland craft beer.
        </p>
        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default BlogPost;
