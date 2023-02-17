import { useState } from 'react';
import reactLogo from './assets/react.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [websiteUrl, setwebsiteUrl] = useState();
  const [thumbnailUrl, setThumbnailUrl] = useState();

  function makeWebsiteThumbnail() {
    axios
      .post('http://localhost:3000/api/thumbnail', {
        url: websiteUrl,
      })
      .then((response) => {
        setThumbnailUrl(response.data.screenshot);
      })
      .catch((error) => {
        window.alert(`The API returned an error: ${error}`);
      });
  }

  return (
    <div id='App' className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 py-5'>
          <h1>Generate a thumbnail of a website</h1>

          <form>
            <div className='form-group'>
              <input
                type='text'
                id='website-input'
                placeholder='Enter a website'
                className='form-control'
                ref={(e) => setwebsiteUrl(e)}
              />
            </div>
            <div className='form-group'>
              <button
                className='btn btn-primary'
                onSubmit={makeWebsiteThumbnail()}
              >
                Generate!
              </button>
            </div>
          </form>
          <img
            className='thumbnail'
            src={thumbnailUrl}
            alt='Website Screenshot'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
