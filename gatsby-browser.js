import React from 'react'
import Layout from './src/components/Layout'
import SimpleReactLightbox from "simple-react-lightbox";

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <SimpleReactLightbox>{element}</SimpleReactLightbox>
    </Layout>
  )
}