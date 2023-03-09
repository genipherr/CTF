import * as React from "react";
import { render } from "react-dom";
import GetFlag from "./components/flag/GetFlag";

function App() {
  return (
    <div className="App">
      <GetFlag />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// Capture the flag!
// function findFlags( section ) {

//   // Check if section id starts with '11'.
//   if ( section.id.startsWith( '11' ) ) {

//       // Get main element.
//       const main = section.querySelector( 'main' );

//       // Check if main id ends in 22.
//       if( main.id.endsWith( '22' ) ) {

//           // Get article element.
//           const article = main.querySelector( 'article' );

//           // Check if article id ends in 33 followed by integer or float.
//           if( article.id.match( /33([1-9]\d*)(\.\d+)?$/ ) ) {

//               // Get the flags.
//               const flags = article.querySelectorAll( 'p.flag' );
//               let values = '';
//               if( flags ) {
//                   for ( const flag of flags ) {
//                       const value = flag.getAttribute( 'value' );
//                       values += value && value;
//                   }
//               }

//               return values;
//           }
//       }
//   }
// }

// function findUrl( sections ) {
//   let url = '';

//   // Find the flags in each section and assemble the url.
//   for ( const section of sections ) {
//       const flags = findFlags( section );
//       url += flags;
//   }
//   return url;
// }

// const sections = document.querySelectorAll( 'section' );
// const link     = findUrl( sections );

// console.log( link );
