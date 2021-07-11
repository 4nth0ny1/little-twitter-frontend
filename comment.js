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