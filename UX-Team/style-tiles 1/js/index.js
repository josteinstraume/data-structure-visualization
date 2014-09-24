/*
 _____,-----------------------,_____
 \    | STYLE TILES WITH SCSS |    /
 /____|-----------------------|____\

by Jerad Gallinger - jeradgallinger.ca
twitter.com/jeradg - codepen.io/jeradg
 ___________________________________
|,---------------------------------,|
||  +-------+ +-------+ +-------+  ||
||  +-------+ |       | |       |  ||
||            |       | |       |  ||
||  +-------+ +-------+ +-------+  ||
||  +-------+ +-------+ +-------+  ||
||  |       | |  \    | |       |  ||
||  |       | |    \  | |       |  ||
||  +-------+ +-------+ +-------+  ||
||_________________________________||
'-----------------------------------'
On GitHub:
github.com/jeradg/style-tiles-with-scss

--
Based on Samantha Warren's Style Tiles:
http://styletil.es/
http://www.alistapart.com/articles/style-tiles-and-how-they-work/
--

A brief explanation:

- Start at the top for the most basic options, and move down for more fine-grained styling.

- The SCSS is sectioned into (from top -> bottom):
  - BASIC STYLING: main colors, basic typography, textures, and button styling.
  - ADVANCED STYLING: Advanced options for the above items. If you want to make fancy buttons, do cool things with the texture boxes, or have fine-grained control over the typography samples and adjectives, do it here.
  - SETTINGS
  - Below the settings, everything comes together in the proper order to be compiled.

Play around! Use SCSS and Compass's colour functions to create colour schemes, try to do fancy stuff in the texture boxes, mess about with floats and margins to customize the layout -- make it your own.

And don't forget -- SAVE OFTEN!

*/

/* (And now for some JavaScript... let's hear it for progressive enhancement.)
*/

$( document ).ready( function() {

/* setHeight() keeps the swatches as squares by setting each swatch's height on document load, and updating it when the viewport is resized. */
  
  var swatchGrids = $( ".swatchgrid" );
  
  var setHeight = function( elements ) {
    $( elements ).each( function() {
      var firstChild = $( this ).find( ":first-child" );
      $( this ).children().each( function() {
        $( this ).height( $( firstChild ).width() );
      });
    });
  };
  
  setHeight( swatchGrids );
      
  $( window ).resize( function() {
    setHeight( swatchGrids );
  });

/* updateFontDetails() changes the HTML of each .font-details-* on document load to reflect the styles of the immediately preceding .typography-sample. This allows you to update the styles of the typography samples on the fly without having to manually enter these details into the HTML. */
  
  var updateFontDetails = function() {
    $( ".typography-sample" ).each( function() {
      var thisSample = $( this );
      
      var getFontName = function( sample ) {
        var splitFontStack = sample.css( "font-family" ).split( "," );
        
        var justTheName = function() {
          var rawFontName = splitFontStack[ 0 ]; //Get the first font-family from the font stack
          if ( rawFontName.charAt( 0 ) == "\'" | "\"" ) {
            return rawFontName.substring( 1, rawFontName.length - 1 ); //Remove the quotes from around the font-family name, if there are any
          } else {
            return rawFontName;
          }
        };
        
        return justTheName();
      };
      
      var fontName = getFontName( thisSample );
      var fontColor = thisSample.css( "color" );
      
      var fontDetails = thisSample.next( "[class*=font-details-]" );
      fontDetails.children( ".font-name" ).html( fontName );
      fontDetails.children( ".font-color" ).html( fontColor );
    });    
  };
  
  updateFontDetails();
  
});