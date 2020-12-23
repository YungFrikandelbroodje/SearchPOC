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

## Stackoverflow Issue

https://stackoverflow.com/questions/65385337/waiting-for-the-contentscript-to-finish-before-looping-next-item-in-background-s
