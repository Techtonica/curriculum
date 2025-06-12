# Data Modeling - Playlist

## Vocab

- normalization
- primary key
- foreign key
- one-to-many relationship

## Excercise

Instructor: share screen and diagram out the database

You're working on a music app like Spotify or Apple Music. First, you need to design the database that will allow users to create a playlists.

## Create a songs model.

Discuss: What attributes does a song have?

Your table might look something like this:

| Column Name | Data Type | Description                     |
| ----------- | --------- | ------------------------------- |
| `id`        | INTEGER   | Unique identifier for each song |
| `title`     | TEXT      | The song's title                |
| `artist`    | TEXT      | The name of the artist          |
| `duration`  | INTEGER   | Song length in seconds          |

<!-- <details>
<summary>
</summary>
</details> -->

Now, add at least 3 songs to your table.

<details>
<summary>Instructor notes
</summary>
including at least 3 songs by the same artist.

example:

| id  | title           | artist        | duration |
| --- | --------------- | ------------- | -------- |
| 1   | "Party"         | Beyonce       | 456      |
| 2   | "Love on Top"   | Beyonce       | 213      |
| 3   | "Midnight City" | M83           | 245      |
| 4   | "Like a Boy"    | Ciara         | 257      |
| 5   | "Single Ladies" | Beyonce       | 213      |
| 6   | "Call on me"    | Janet Jackson | 388      |

Guide learners to realize the artist name is stored multiple times.

Ask: What happens if we update the artist's name? we’d have to update every row.

manually walk through updating an artist's name. What happens if you don't update all the names? one song has Beyonce Knowles, one has Beyonce Carter, then how would you query that?

</details>

## Normalize the Data

We’re duplicating data which can lead to inconsistency. To solve this, we’ll separate artists into their own table, and connect songs to artists using an artist ID.

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

Now, if you want to update an artists name, you only have to perform one database operation of updating one row in the artists table, rather than searching for and changing every song row. This is a much more efficient database design.

Discuss: What is the relationship between songs and artists?

one to many. an artist has many songs. a song belongs to one artist.

## Diagram It Out

Now draw a diagram using dbdiagram.io or your preferred db diagramming software.
