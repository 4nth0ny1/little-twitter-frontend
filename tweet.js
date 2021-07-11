class Tweet {

    static all = []

    constructor({id, content}){
        this.id = id
        this.content = content 
        Tweet.all.push(this)
    }

    static findById(tweetId){
        return Tweet.all.find(tweet => tweet.id === tweetId)
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

        const editButton = document.createElement('button')
        editButton.classList.add('edit-tweet-button')
        editButton.dataset.tweetId = this.id 
        editButton.innerText = "Edit Tweet"
        div.appendChild(editButton)
        editButton.addEventListener('click', Tweet.editTweet)
    }

    static editTweet(e){
        const tweetId = e.target.dataset.tweetId
        const tweet = Tweet.findById(parseInt(tweetId))
        tweet.renderEditForm()
    }

    renderEditForm(){
        const container = document.getElementById(`tweet-${this.id}`)
        const tweetInfo = container.querySelector('.tweet-info')

        tweetInfo.classList.add('d-none')

        const form = 
        `
            <form data-tweet-id='${this.id}' class='edit-tweet-form'>
                <label for="content">Content: </label>
                <input type="text" id="tweet-content-input" name="content" value="${this.content}">
                <input type="submit">
            </form>
            <br>
        `

        const formContainer = document.createElement('div')
        formContainer.classList.add('edit-form-container')
        formContainer.innerHTML = form 
        container.prepend(formContainer)
        container.querySelector('.edit-tweet-button').classList.add('d-none')
        container.querySelector('.edit-tweet-form').addEventListener('submit', TweetApi.submitTweetEdit)
    }

    refresh({id, content}){   // setter
        this.id = id
        this.content = content 
    }

}