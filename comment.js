class Comment {

    static all = []

    constructor({id, reply, tweet}){
        this.id = id 
        this.reply = reply 
        this.tweetId = tweet.id
        Comment.all.push(this)
    }

    static viewCommentClick(e){
       const tweetId = e.target.dataset.tweetId
       CommentApi.fetch(tweetId)

       const button = document.createElement('button')
       button.innerText = "Add Comment"
       button.classList.add('add-comment-button')
       button.dataset.tweetId = tweetId

       const tweetDiv = document.querySelector(`#tweet-${tweetId}`)
       tweetDiv.appendChild(button)
       button.addEventListener('click', Comment.newComment)
    }

    static newComment(event){
        const tweetId = event.target.dataset.tweetId
        Comment.renderNewCommentForm(tweetId)
    }

    static renderNewCommentForm(tweetId){
        const container = document.getElementById(`tweet-${tweetId}`)

        const form = 
        `
            <form class="new-comment-form">
                <input type="hidden" id="comment-tweet-id" value="${tweetId}">
                <label for="reply">Reply: </label>
                <input type="text" id="comment-reply-input" name="reply">
                <input type="submit">
            </form>
            <br>
        `

        const formContainer = document.createElement('div')
        formContainer.classList.add('new-comment-form-container')
        formContainer.innerHTML = form
        container.append(formContainer)
        container.querySelector('.add-comment-button').classList.add('d-none')
        container.querySelector('.new-comment-form').addEventListener('submit', CommentApi.submitComment)
    }

    render(){
        if (document.querySelector(`#comment-${this.id}`)){
            return
        }
        const tweetDiv = document.querySelector(`#tweet-${this.tweetId}`)
        const div = document.createElement('div')
        div.id = `comment-${this.id}`
        div.classList.add('comment')
        div.innerHTML = 
        `
            <p class="comment-info">${this.reply}</li>
        `
        tweetDiv.appendChild(div)

        const viewCommentButton = document.querySelectorAll('.view-comment-button')
        viewCommentButton.forEach(button => 
            button.addEventListener('click', () => { div.innerHTML = '' })
        )


    }
    


}