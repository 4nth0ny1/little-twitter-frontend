class TweetApi {

    static fetchTweets = () => {
        fetch('http://127.0.0.1:3000/tweets')
        .then(res => res.json())
        .then(data => data.forEach(tweetJson => {
            const tweet = new Tweet(tweetJson)
            tweet.render()
        }))
    }

    static submitTweet(e){
        e.preventDefault()
        const form = document.getElementById('new-tweet-form')
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                tweet: {
                    content: form.querySelector('#tweet-content-input').value
                }
            })
        }

        fetch(tweetURL, configObj)
        .then(res => res.json())
        .then(data => {
            let newTweet = new Tweet(data)
            newTweet.render()
        })

        form.reset()      
    }
}