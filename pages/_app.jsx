/* eslint react/prop-types: "off" */

// start xmas stuff
import Snowfall from "react-snowfall";
// end xmas stuff

const TodoApp = ({ Component, pageProps }) => (
  <>
    <main>
      <Component {...pageProps} />
      <Snowfall />
    </main>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap');
      html {
        box-sizing: border-box;
        font-size: 16px;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: 'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
          Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        background-image: linear-gradient(160deg, #0f2233 0%, #010105 100%);
      }
      #__next {
        display: flex;
        justify-content: center;
        height: calc(100vh - 3px);
        width: 100vw;
      }
      .container {
        padding: 0 0.9375rem;
        margin: 0 auto;
        max-width: 60rem;
        padding-bottom: 200px;
        color: #dcdaf0;
      }
    `}</style>
  </>
);

export default TodoApp;
