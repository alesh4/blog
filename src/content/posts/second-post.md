---
title: 'Second post'
description: 'New meaning: Works on My Machine'
pubDate: 'Jul 25 2025'

---

It started with a simple enhancement. 

I was to edit a table on the HTML side---nothing fancy. A user would add an input via an input field and choose from a selection box, coupled with some backend logic, done.

So, I wrote the backend and frontend code for this. Everything worked for me. Then I pushed the code to the server---I could probably rant about how we "deploy" to the server but maybe in another post---yet no change. 

Then, I load the page, and it doesn't seem to have my latest code. In fact, partial logic is there, but not all of it. I checked my files again and pushed again. At some point during this I get a more pressing task to do, also context switching is no joke. I pushed the same code, same process, same everything, nothing. I probably deployed a bit under a dozen times. 

At this point, I should probably mention that our JavaScript code lives in multiple folders. The structure depends on the several features. Think unique features between parts of the page vs more common features. Then, our push to server will concatenate all files into a single file, that's what gets served. 

I checked this file in the server, it is there, I check functionality, nothing. I felt like I was losing my mind, the code is there, but it would not run. I must to have taken me hours---days even---to finally see my mistake, I had trusted the coding convention I was told during my onboarding. It turns out that this code was so old that they were serving the page with the with JavaScript in the script tag. You are probably thinking: what?
I know!

Yes of course, that's how most frontend code is served to the client. You add the code to the script tab, but that's not what we agreed on. So, I removed the old code from the page, redeploy, and finally it matches my machine's code. I do my user testing, and redeploy to production server. 

Oh legacy code, you jerk!

If you have some thoughts on this or want to share similar story or just want to connect, feel free to shoot me an email at the address found in the footer.
