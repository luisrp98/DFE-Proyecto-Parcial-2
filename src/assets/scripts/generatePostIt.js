export function generatePostIt(title, priority, tag, dueDate, description) {
    // It identify the main container for the post its
    const postItContainer = document.querySelector('.post-its-container')

    // Create in base of a template, the post itself
    const postItTemplate = `
                <h1 class="post-it-title">
                    ${title}
                </h1>
                <div class="post-it-text">
                    <p class="post-it-priority">
                        <i class="fa-solid fa-circle"></i> ${priority}
                    </p>
                    <p class="post-it-tag"><i class="fa-solid fa-tag"></i> ${tag}</p>
                    <p class="post-it-date">
                        <i class="fa-solid fa-calendar-days"></i> ${dueDate}
                    </p>
                </div>
                <p class="post-it-description">
                    ${description}
                </p>
                `

    // Create a new instance of a post it, add the class to the element and add the content to it
    const postIt = document.createElement('div')
    postIt.classList.add('post-it')

    postIt.innerHTML = postItTemplate

    // Add the post it to the container
    postItContainer.appendChild(postIt)
}
