


function Details(props) {


  return (
    <div className="App">
      <div className="outerbox">
        <div className="ravi-innerbox">
          <h1 className="ravi-center">
            Hello i am <span className="ravi-name">{props.fullName}</span>
          </h1>
          <p>{props.p}</p>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt=""
            class="ravi-image"
          />
          <h3>Hobbies</h3>
          <ul>
            <li>Movies</li>
            <li>Cricket</li>
          </ul>
          <a href="https://github.com/raviprakashdev" target="_blank">
            <button>Read more</button>
          </a>
        </div>
      </div>
    </div>
    // jsx
  );
}

export default Details;
