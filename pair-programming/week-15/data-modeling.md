# Data Modeling - Playlist

## Vocab

- Normalization: Structuring a database to reduce redundancy and improve data integrity
- Primary key: A unique identifier for each row in a table
- Foreign key: A reference to a primary key in another table
- One-to-many relationship: A relationship where one record in a table can be associated with many records in another table

## Excercise

You're working on a music app like Spotify or Apple Music. First, you need to design the database that will allow users to create a playlists.

## Create a songs model

Discuss: What attributes does a song have?

Your table might look something like this:

| Column Name | Data Type | Description                     |
| ----------- | --------- | ------------------------------- |
| `id`        | INTEGER   | Unique identifier for each song |
| `title`     | TEXT      | The song's title                |
| `artist`    | TEXT      | The name of the artist          |
| `duration`  | INTEGER   | Song length in seconds          |

Now, add at least 3 songs to your table including at least 3 songs by the same artist.

example:

| id  | title           | artist        | duration |
| --- | --------------- | ------------- | -------- |
| 1   | "Party"         | Beyonce       | 456      |
| 2   | "Love on Top"   | Beyonce       | 213      |
| 3   | "Midnight City" | M83           | 245      |
| 4   | "Like a Boy"    | Ciara         | 257      |
| 5   | "Single Ladies" | Beyonce       | 213      |
| 6   | "Call on me"    | Janet Jackson | 388      |

Notice the artist name is stored multiple times.

Discuss:

- What happens if the artist’s name changes?
  - manually update an artist's name. How many songs is that? Imagine if we had her whole discography!
  - What happens if you don't update all the names?
- What if one song says "Beyoncé Knowles" and another says "Beyoncé Carter"?
- How would you query for all Beyoncé songs?

## Normalize the Data

We’re duplicating data which can lead to inconsistency and can make updates difficult and computationally expensive. To solve this, we’ll separate artists into their own table, and connect songs to artists using an artist ID.

Discuss: What attributes does an artist have?

Your table might look something like this:

| Column Name | Data Type | Description              |
| ----------- | --------- | ------------------------ |
| `id`        | INTEGER   | Unique ID for the artist |
| `name`      | TEXT      | Artist's full name       |

and add your artists to the table

| id  | name            |
| --- | --------------- |
| 1   | "Beyonce        |
| 2   | "M83            |
| 3   | "Ciara          |
| 4   | "Janet Jackson" |

Now, update your songs table and replace `artist` with `artist_id`.

| id  | title           | artist_id | duration |
| --- | --------------- | --------- | -------- |
| 1   | "Party"         | 1         | 456      |
| 2   | "Love on Top"   | 1         | 213      |
| 3   | "Midnight City" | 2         | 245      |
| 4   | "Like a Boy"    | 3         | 257      |
| 5   | "Single Ladies" | 1         | 213      |
| 6   | "Call on me"    | 4         | 388      |

Now, if an artist’s name changes, you only update one row in the artists table.

Discuss: What is the relationship between songs and artists?

## Diagram It Out

Now draw a diagram using dbdiagram.io or your preferred db diagramming software.

### Optional Extension

- add playlists (Advanced)
