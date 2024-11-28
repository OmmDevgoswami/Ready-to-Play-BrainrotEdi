import './Loading.css';

function Loading() {
  return (
    <>
        <div className="banner">
            <div className="container">
                <h1>
                    <img className="logo" src="./src/assets/Resources/Logo.png" alt="logo" /> 
                    Ready-to-Play
                </h1>
                <button type="button" className="btn btn-secondary btn-lg"> Let The Rumbling Begin </button>
            </div>
      </div>
    </>
  );
}

export default Loading;
