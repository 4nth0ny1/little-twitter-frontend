class Tweet {

    static all = []

    constructor({id, content}){
        this.id = id
        this.content = content 
        Tweet.all.push(this)
    }

    render(){
        const tweetsContainer = document.querySelector('.tweets-container')
        const div = document.createElement('div')
        div.id = `tweet-${this.id}`
        div.classList.add('tweet-item')
        div.innerHTML = 
        `
            <div class="tweet-info">
                <h1>${this.content}</h1>
            </div>
        `
        tweetsContainer.appendChild(div)

        const viewCommentButton = document.createElement('button')
        viewCommentButton.dataset.tweetId = this.id 
        viewCommentButton.classList.add('view-comment-button')
        viewCommentButton.innerText = "View Comments"
        div.appendChild(viewCommentButton)

        viewCommentButton.addEventListener('click', Comment.viewCommentClick)

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-tweet-button')
        deleteButton.dataset.tweetId = this.id 
        deleteButton.innerText = "Delete Tweet"

        div.appendChild(deleteButton)

        deleteButton.addEventListener('click', TweetApi.deleteTweet)
    }




}