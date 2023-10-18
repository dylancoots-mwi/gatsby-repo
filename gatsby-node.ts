exports.createSchemaCustomization = ({ actions }) => {
	const {createTypes} = actions
	const typeDefs = `
    type MdxFrontmatter implements Node {
      title: String
      topic: String
      slug: String
      images: [Image]
    }

    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    
    type Image {
    	label: String
    	value: String
    	src: File @fileByRelativePath
    	content: File @fileByRelativePath
    }
  `;
	createTypes(typeDefs)
}

