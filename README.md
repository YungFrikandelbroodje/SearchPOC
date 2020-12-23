# GoogleSearchPOC 

## How to use?

1. Go to https://www.google.com/search?q=a (needs to be on the resultspage for the sake of the POC)
2. Click on the extension, and then click 'Activate Plugin'
3. You can open the console and backgroundpage to see the logs

## Problem

As you can see, it only searches the last term. This is because it goes through the for-loop really fast, and ends there.

It needs to do this in steps. 
1. First search the first term
2. Send the data to the background
3. Search the second term
4. Etc...


## FAQ

### Why not just put everything in contentscript and loop there?

I tried this, but when a page reloads (like on google), it begins at the first item in the array again. It needs to remember the last term that it has searched.

### Why is the messaging so complicated?

Back in time I was trying to get a message from the browser action to the background script. It wasn't possible for some reason to do it directly, so I made a bridge in the contentscript. You should only focus on "SEARCH_TERMS" in background.js, which sends a "SEARCH_SINGLE_TERM" to content.js with a single searchterm.

## Possible solution

### Use localstorage
Using the localstorage, set variables like a boolean 'beganSearch' and a string 'lastSearchQuery'. Then put everything in the contentscript.
- beganSearch == true? Continue where it left
- beganSearch == false? Begin at 0

I haven't tested this yet though. I think if the current repo could work out, that it would be cleaner.

## Stackoverflow Issue

https://stackoverflow.com/questions/65385337/waiting-for-the-contentscript-to-finish-before-looping-next-item-in-background-s
