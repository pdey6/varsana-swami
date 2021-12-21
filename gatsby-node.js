const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/postTemplate.js`)
  const categoryTemplate = path.resolve(`src/templates/categoryTemplate.js`)

  return graphql(`
  {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            category
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // create category pages
    let categories = []

    // Iterate through each post, putting all found categories into `categories`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.category")) {
        categories = categories.concat(edge.node.frontmatter.category)
      }
    })

    // Eliminate duplicate categories
    categories = _.uniq(categories)

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug,
          category: node.frontmatter.category,
        },
      })
    })

    // Make category pages
    categories.forEach(category => {
      createPage({
        path: `/${_.kebabCase(category)}/`,
        component: categoryTemplate,
        context: { category },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: value,
    })
  }
}
