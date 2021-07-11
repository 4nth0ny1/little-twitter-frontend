class CommentApi {

    static fetch = (tweetId) => {
        fetch(`http://127.0.0.1:3000/tweets/${tweetId}/comments`)
        .then(res => res.json())
        .then(data => data.forEach(commentJson => {
            const comment = new Comment(commentJson)
            comment.render()
        }))
    }

    static submitComment(e){
        e.preventDefault()
        const form = e.target
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: {
                    reply: form.querySelector('#comment-reply-input').value, 
                    tweet_id: form.querySelector('#comment-tweet-id').value
                }
            })
        }
        fetch(commentURL, configObj)
        .then(res => res.json())
        .then(data => {
            let newComment = new Comment(data)
            newComment.render()
            const homeContainer = document.querySelector(`#tweet-${newComment.tweetId}`)
            homeContainer.querySelector('.new-comment-form-container').remove()
            homeContainer.querySelector('.add-comment-button').classList.remove('d-none')
        })

        form.reset()
    }

    static deleteComment(e){
        const commentId = e.target.dataset.commentId

        document.getElementById(`comment-${commentId}`).remove()

        fetch(`${commentURL}/${commentId}`, {
            method: "DELETE"
        })
    }
}