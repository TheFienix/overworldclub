var metalsmithConf = {
  metadata: {
    title:          "Overworld - Esports & Gaming Club",
    description:    "Sito ufficiale dell'Overworld Club di Monterotondo",
    generator:      "Metalsmith",
    url:            "http://www.overworld.it",
    ogImage:        "img/OpenGraph-image.jpg",
    facebook: "https://www.facebook.com/OverworldGG"
  },
  collections: {
    sections: {
      pattern: 'sections/**/*.md',
      sortBy: 'order',
      reverse: false,
      metadata: {
        name: 'Section',
        description: 'website sections'
      }
    }
  },
  images: {
    pattern: '**/*.md'
  },
  adaptiveImages: {
    imagesKey: 'images',
    mapKey: 'imagesMap',
    imageWidths: [1280, 800, 500],
    imageSizes: ['100vw'],
    defaultSize: 1280,
    namingPattern: '{dir}{name}-{size}{ext}', // foo/bar-200.jpg,...
    srcsetPattern: '/{url} {size}w', // foo/bar-200.jpg 200w,...
    htmlFileGlob: '**/*.html',
    htmlImageSelector: 'img'
  },
  sharp: [
    {
      namingPattern: '{dir}{name}{ext}',
      methods: [
        {
          name: 'resize',
          args: [ 1, 1 ]
        }
      ]
    },
    {
      namingPattern:'{dir}{name}-1280{ext}',
      methods: [
        {
          name: 'resize',
          args: [ null, 1200 ]
        }
      ]
    },
    {
      namingPattern:'{dir}{name}-800{ext}',
      methods: [
        {
          name: 'resize',
          args: [ null, 800 ]
        }
      ]
    },
    {
      namingPattern:'{dir}{name}-500{ext}',
      methods: [
        {
          name: 'resize',
          args: [ null, 500 ]
        }
      ]
    }],
    layouts: {
      directory: 'layouts',
      engine: 'handlebars',
      partials: 'partials'
    },
    writemetadata: {
      pattern: ['**/*'],
      ignorekeys: ['next','previous'],
      bufferencoding: 'utf8'
    },
    debug: { // Use setting up an environment variable DEBUG=metalsmith:*
      log: "first debug",      // any comment you like
      metadata: true,         // default: true
      source: false,           // default: true
      destination: false,      // default: true
      files: true,             // default: true
      match: "**/*.md"         // default: all files
    }
  };

  module.exports = metalsmithConf;
