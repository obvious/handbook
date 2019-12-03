// npm install storyblok-js-client
const StoryblokClient = require('storyblok-js-client')

// init with access token
const sb = new StoryblokClient({
    accessToken: 'StXtcN8NRmv5zl3qzv6QzAtt',
    oauthToken: 'S3kpQNy5jDVRM7DOJ3hZLAtt-56897-Y6s-_TtVx-KAH19X8YyH',
    cache: {
        clear: 'auto',
        type: 'memory'
    }
})

sb.get('cdn/stories/', {
    "starts_with": "publications/"
}).then(response => {

})