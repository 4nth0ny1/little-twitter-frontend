const newTweetForm = document.getElementById('new-tweet-form')
const tweetURL = 'http://127.0.0.1:3000/tweets'
const commentURL = 'http://127.0.0.1:3000/comments'

document.addEventListener("DOMContentLoaded", () => {
    TweetApi.fetchTweets()

    newTweetForm.addEventListener('submit', TweetApi.submitTweet)







})