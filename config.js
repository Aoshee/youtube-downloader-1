
module.exports = {

  // Urls to download
  urls: [
    'https://www.youtube.com/watch?v=Tdq8jZ7plCc',
    'https://www.youtube.com/watch?v=mL_csRAiWow'
  ],

  // See: https://github.com/rg3/youtube-dl/blob/master/README.md#readme
  args: {

    // Download
    retries: 2,

    // Thumbnails
    writeThumbnail: true,
    writeAllThumbnails: true,

    // Output
    output: '"./output/%(id)s/%(id)s.%(ext)s"',
    writeInfoJson: true,

    // Formats
    // allFormats: true,
    format: 'best',
    preferFreeFormats: true
  }
};
