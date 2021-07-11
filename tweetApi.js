class TweetApi {

    static fetchTweets = () => {
        fetch('http://127.0.0.1:3000/tweets')
        .then(res => res.json())
        .then(data => data.forEach(tweetJson => {
            const tweet = new Tweet(tweetJson)
            tweet.render()
        }))
    }

}