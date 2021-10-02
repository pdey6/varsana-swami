import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              function onlyPlayOneIn(container) {
                container.addEventListener("play", function(event) {
                audio_elements = container.getElementsByTagName("audio")
                  for(i=0; i < audio_elements.length; i++) {
                    audio_element = audio_elements[i];
                    if (audio_element !== event.target) {
                      audio_element.pause();
                    }
                  }
                }, true);
              }
              
              document.addEventListener("DOMContentLoaded", function() {
                onlyPlayOneIn(document.body);
              });
            `,
          }}
        />
        
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
