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

    static deleteTweet(e){
        const tweetId = e.target.dataset.tweetId

        document.getElementById(`tweet-${tweetId}`).remove()

        fetch(`${tweetURL}/${tweetId}`, {
            method: "DELETE"
        })
    }

    static submitTweetEdit(e){
        e.preventDefault()
        const tweetId = e.target.dataset.tweetId

        const container = document.querySelector(`#tweet-${tweetId}`)
        const form = container.querySelector('.edit-tweet-form')

        const configObj = {
            method: "PATCH", 
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

        fetch(`${tweetURL}/${tweetId}`, configObj)
        .then(res => res.json())
        .then(data => {
            const tweet = Tweet.findById(parseInt(data.id))
            tweet.content = data.content
            document.querySelector(`#tweet-${tweet.id}`).remove()
            tweet.render()
        })

        form.reset()
    }
}