class CommentApi {

    static fetch = (tweetId) => {
        fetch(`http://127.0.0.1:3000/tweets/${tweetId}/comments`)
        .then(res => res.json())
        .then(data => data.forEach(commentJson => {
            const comment = new Comment(commentJson)
            comment.render()
        }))
    }
}