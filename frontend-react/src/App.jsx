import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [websiteUrl, setwebsiteUrl] = useState();

  function makeWebsiteThumbnail() {
    axios
      .post('http://localhost:3000/api/thumbnail', {
        url: this.websiteUrl,
      })
      .then((response) => {
        this.thumbnailUrl = response.data.screenshot;
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
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
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-primary'>Generate!</button>
            </div>
          </form>
          <img
            className='thumbnail'
            src='thumbnailUrl'
            alt='Website Screenshot'
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// <style lang="scss">
// #body {
//   background-color: #2c3e50;
//   color: #ffffff;
// }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #ffffff;
//   background: #2c3e50;
// }

// div {
//   background-color: #2c3e50;
//   color: #ffffff;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #ffffff;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// .thumbnail {
//   width: max-content;
//   height: fit-content;
// }
// </style>
