## P3 Peer Review

+ Reviewer's name: 
Andrea Salkey

+ Reviwee's name: 
Grace Punzalan

+ URL to reviewee's Github repo: *<https://github.com/example/e28>*
https://github.com/gpunzalan18/e28/

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?

On the favourites page if I change the local storage "favoritesById" to a number that doesn't exist I see 
 ```
    vue.runtime.esm.js:1888 TypeError: Cannot read property 'id' of undefined
 ```
in the console and a page with just the top header no content in the body.

### Were there any parts of the interface that you found confusing or unclear?

Interface was clear and concise. Nothing was confusing about the website.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

In a few of the components files , BlogpostPage.vue and FavoritesPage.vue, I see that the student is including what I assumed was some sort of module for sessions. 
```
    <script>
  import blogPosts from "../../data/blogposts.json";
  const axios = require("axios");
  import * as session from "../../session";

```
When I looked in the session.js file I see code for local storage and not server based sessions as I had assumed.

```
  let favoritesById = localStorage.getItem('favoritesById') ? JSON.parse(localStorage.getItem('favoritesById')) : [];
```
Perhaps student should add a comment that it's not sessions but local storage above the import statement.

### Are there any parts of the code that you found interesting or taught you something new?

I see that the student is using computed properties to display the data. This is something I should probably revisit and look into perhaps adding in my own project.

### Are there any best practices discussed in course material that you feel were not addressed in the code?
Here https://github.com/gpunzalan18/e28/blob/master/p3/src/components/main/BlogpostPage.vue on line 59.
```
        if (this.favorited) {
        this.favorited = false;
        session.removeFromFavorites(this.blogPost.id);
      } else {
        session.addToFavorites(this.blogPost.id);
        this.favorited = true;
      }
```
The code is not checking if the selected post is already in storage it's checking if the variable "favorited" is true or false. 
This seems like it could be bypassed. 

### Do you have any additional comments not covered in the above questions?
No additional comments. The student did a great job =) 
