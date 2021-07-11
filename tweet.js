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
        

        const viewCommentButton = document.createElement('button')
        viewCommentButton.dataset.tweetId = this.id 
        viewCommentButton.innerText = "View Comments"
        div.appendChild(viewCommentButton)
        tweetsContainer.appendChild(div)
    }




}