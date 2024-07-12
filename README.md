# List_It-Tracking-App

## Overview

List_It is an application that allows users to track progress on different forms of online entertainment ex. TV shows

### Problem

There are many different online tracking applications for specific things but not one for general lists that allow users to group these tracking lists together. Ex. MyDramalist only track asian dramas, not other tv shows. I would like to create an application that groups these altogether, where it is easy to find and easy to view (Good UI)

#### Problem Image

![] (Problem.png)

### User Profile

Anybody who likes to keep track of what they watch / read, what point of progress they are at if they are not complete to keep them in place.

Special Considerations: Making this application as detailed but as simple as possible. Allowing users to create a custom list that they would be able to input what they want (No API attachment)

### Features

As a user, I want to create custom lists

As a user, I want to have these lists all in one place

As a user, I want to be able to keep track of all the books/ shows I read/watch

As a user, I want to be able to track how many episodes/chapters I have read/watched

As a user, I want to be able to see if I have finished reading/watching all that is available

As a user, I want to easily see if I finished reading/watching something

As a user, I want to be able to easily add to each list (Images, summaries, etc)

## Implementation

### Tech Stack

- React
- Javascript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios

### APIs

There are multiple API's that I will be using (some will not be implemented within the capstone timeframe)

Introduction – API Reference (mydramalist.github.io) - List of Asian Dramas

TV API | TVmaze - Add TV information to your website or app. - List of TV shows

reactnd-books-api.udacity.com - List of Books

MangaDex API documentation - List of Manga

Introduction | AniList APIv2 Docs (gitbook.io) - List of Anime

MyAnimeList API (beta ver.) - List of Anime

### Sitemap

- Home Page
  This page will show a list of list that the user has created. Here the user will be able to:  
   Create new lists (This will give the user the option to choose a type of list/Api to use or create a custom list)
  Delete Lists
  Filter Lists
- List Page
  This page will show each object in the list. Here the user will be able to:
  Create new items
  Delete items
- Add Page

### Mockups

![] (Design (Drawn).png)

### Data

This data will contain all the information that is saved by the user. When they add to each list.
More information to come

### Endpoints

More information to come

## Roadmap

Note: This is a very basic outline and will not represent the full roadmap

- Create client

  - react project outline

- Create server

  - express project with routing

- Feature: Creating the lists

- Feature: Creating the item

- Feature: Adding an item to the list

- Feature: Deleting an item

- Feature: Deleting a list

- Bug fixes

- DEMO DAY

## Nice-to-haves

Make it so each item auto updates - ex. New season of a tv show would make the show change from completed to ongoing.

Add more API's for types of lists

Adding a Signon Feature

Personal Ratings

In the list page, a right side modal that tells user what has been updated/ added

An export to excel button
