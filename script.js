const blogPosts = [
    {
        title: "First Blog Post",
        content: "This is the content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Second Blog Post",
        content: "This is the content of the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Third Blog Post",
        content: "This is the content of the third blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Fourth Blog Post",
        content: "This is the content of the fourth blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Fifth Blog Post",
        content: "This is the content of the fifth blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Sixth Blog Post",
        content: "This is the content of the sixth blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Seventh Blog Post",
        content: "This is the content of the seventh blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Eighth Blog Post",
        content: "This is the content of the eighth blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Ninth Blog Post",
        content: "This is the content of the ninth blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Tenth Blog Post",
        content: "This is the content of the tenth blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Eleventh Blog Post",
        content: "This is the content of the eleventh blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    },
    {
        title: "Twelfth Blog Post",
        content: "This is the content of the twelfth blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.",
        image: "img/1.jpg"
    }
];

function displayBlogPosts() {
    const blogPostsSection = document.getElementById('blog-posts');
    blogPostsSection.innerHTML = blogPosts.map(post => `
        <article class="blog-post">
            <img src="${post.image}" alt="${post.title}">
            <h2>${post.title}</h2>
            <p class="content">${truncateContent(post.content)}</p>
            <button class="see-more">See More</button>
            <p class="full-content" style="display: none;">${post.content}</p>
        </article>
    `).join('');
    
    // Add event listeners to the "See More" buttons
    const seeMoreButtons = document.querySelectorAll('.see-more');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fullContent = this.nextElementSibling;
            if (fullContent.style.display === "none") {
                fullContent.style.display = "block";
                this.textContent = "See Less";
            } else {
                fullContent.style.display = "none";
                this.textContent = "See More";
            }
        });
    });
}

function truncateContent(content) {
    const maxLength = 150; // Adjust this value as needed
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
}

document.addEventListener('DOMContentLoaded', displayBlogPosts);
