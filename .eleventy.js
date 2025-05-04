module.exports = function(eleventyConfig) {
    // Copy assets to output
    eleventyConfig.addPassthroughCopy("src/assets");
    
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};