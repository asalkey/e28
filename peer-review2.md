## P3 Peer Review

+ Reviewer's name: Andrea Salkey
+ Reviwee's name: Steven Truong
+ URL to reviewee's Github repo: *https://github.com/spttruong/e28*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?

When I click on an outfit I see the following error in the console log:

  ```
    vue.runtime.esm.js:1888 TypeError: Cannot read property 'title' of null
    at a.A (OutfitPostPage.vue?12d7:1)
    at a.t._render (vue.runtime.esm.js:3542)
    at a.r (vue.runtime.esm.js:4060)
    at nr.get (vue.runtime.esm.js:4473)
    at new nr (vue.runtime.esm.js:4462)
    at In (vue.runtime.esm.js:4067)
    at a.Or.$mount (vue.runtime.esm.js:8409)
    at init (vue.runtime.esm.js:3118)
    at n (vue.runtime.esm.js:3301)
    at h (vue.runtime.esm.js:5972)
  ```

### Were there any parts of the interface that you found confusing or unclear?

The interface is straightforward. I did not find anything unclear.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

The code itself was clear and easy to follow.

### Are there any parts of the code that you found interesting or taught you something new?

Student created a class, **favorites.js**, to hold methods for his favourite page. I thought that was a clean way to add additional JavaScript code to the Vue application.

### Are there any best practices discussed in course material that you feel were not addressed in the code?

When you go to the favorites page and remove an item you need to refresh the page in order to see that the item is gone.
I believe there was a lesson that went over how to refactor the code to address such an issue.

### Do you have any additional comments not covered in the above questions?
Student created a config file, **app.js**, where he is including his **favorites.js** class,creating a variable for the API url and including the axios module.
```
  export { default as Favorites } from './Favorites.js';

  export const axios = require('axios');

  export const config = {
    api: 'https://my-json-server.typicode.com/spttruong/e28-p3-api/'
  };
 ```
 I think the student could have benefited from using an NPM module https://www.npmjs.com/package/dotenv to handle this. 
