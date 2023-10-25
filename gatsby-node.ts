exports.createSchemaCustomization = ({ actions }) => {
	const {createTypes} = actions
	const typeDefs = `
    type MdxFrontmatter implements Node {
      title: String
      topic: String
      slug: String
      flavors: [Flavor]
    }

    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    
    type Flavor {
    	label: String
    	value: String
    	src: File @fileByRelativePath
    	content: File @fileByRelativePath
    }
  `;
	createTypes(typeDefs)
}
