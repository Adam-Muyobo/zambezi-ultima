module.exports = function(eleventyConfig) {
    // Copy assets and other files
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/.nojekyll");
    
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      },
      pathPrefix: "/zambezi-ultima/"  // Add this if deploying to project site (username.github.io/repo)
    };
  };