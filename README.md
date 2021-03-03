<img align="left" width="100px" height="100px" src="https://seso-static-assets-public.s3.amazonaws.com/seso-logo-green-a-100x100.png" alt="seso-logo">

# SESO Coding Challenge: Log Sorting

<br>

## Instructions

We have a number of [**log sources**](https://github.com/sesolabor/coding-challenge/blob/master/lib/log-source.js).  Each log source contains N log entries.  Each entry is a javascript object with a timestamp and message.  We don't know the number of log entries each source contains - however - we do know that the entries within each source are sorted 🕒 **chronologically** 🕒.

Our mission is to print all of the entries, across all of the sources, in chronological order. We don't need to store the log entries, just print them to stdout.

We expect candidates to spend 1-3 hours on this exercise. Feel free to use 3rd party libraries for any **data structures** or utility functions you might need.

## Pointers & Callouts

* We don't know how many logs each source contains.  A source could contain millions of entries and be exabytes in size! In other words, reading the entirety of a log source into memory won't work well.
* Log sources could contain logs from last year, from yesterday, even from 100 years ago. We won't know the timeframe of a log source until we start looking.
* Consider what would happen when asked to merge 1 million log sources.  Where might bottlenecks arise?

There are two parts of the challenge which you'll see when diving into things.  You can get started by running `npm start`.

## How will your submission be evaluated?

1. Code cleanliness. 👉 *Does the code demonstrate a commitment legibility and understandability?*
1. Code efficacy. 👉 *Does the code work? Does the code address the questions being asked?*
1. Code efficiency. 👉 *Does the code exhibit an understanding of the problem and drain the log sources efficiently?*

## Submitting

Create a GitHub repo and email your point of contact the link.

If - for whatever reason - you cannot create a GitHub repo for this challenge, it is also acceptable to 'zip' the directory and provide your submission as an email attachment.