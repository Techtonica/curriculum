# Intro to Algorithms
 gdfgfdgfdg
### Projected Time

30-45 minutes total

- Lesson - 20 min
- Video - 6 min
- Independent Practice - 10 min
- Check for Understanding - 10 min

### Prerequisites

Required:

- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)
- [Intro to Data Structures](/data-structures/intro-to-data-structures.md)

Recommended:

- [Trees](/data-structures/trees.md)
- [Linked Lists](/data-structures/linked-lists.md)
- [Hash Tables](/data-structures/hash-tables.md)

### Motivation

Let's say the zombie apocalypse happens and you have to get to the coast because there's a boat that's waiting to take you away to safety, but only if you drive a car full of supplies to them. You didn't think they would let you on the boat for free, did you? But there's a problem: strange city and no google maps. So what do you do? At every intersection, you turn toward whichever road leads west. If you're heading west and the road curves to the right too far, you just turn left at the next intersection. If that road curves to the left too far, you turn right. This is an algorithm, and algorithms like this might save your life.

Barring that, you'll need to know algorithms because designing the wrong one will probably mean your code will be crazy slow. They're also commonly referenced in engineering job interviews, and if you don't pass that then you won't get the job. If you're comfortable with both of these, you can skip this course.

**Which companies use algorithms?**  
A couple top companies using algorithms:

- [Siri](https://skywell.software/blog/how-does-siri-work-technology-and-algorithm/)
- [Netflix](https://revoseek.com/technology/netflix-algorithm/)

### Objectives

**Participants will be able to:**

- Describe what an algorithm is
- Review Big-O complexity

### Materials

- [Slideshow: Intro to Algorithms](https://docs.google.com/presentation/d/1WlG5OgF0gf9fQYEEgIysNSfNaMiCASBi8RJa25SwMC4/edit?usp=sharing)
- [Video: What is an algorithm and why should you care?](https://youtu.be/CvSOaYi89B4)

### Lesson

#### Changing Constraints

An algorithm is kind of like the second half of a cooking recipe. The first half lists the ingredients, and the second half will list what to do with them. Algorithms are a set of procedures. There isn't always a "correct" algorithm; your algorithm choice depends a little on the context of the question.

Let's say you're making a sandwich. You might start with two slices of bread, take a knife and dip it in peanut butter and paint one slice with that. Then you clean your knife, then dip it in jelly, then paint the other slice. Then you clean your knife again, and put it away. Now you put the bread together and enjoy. It took you 30 seconds.

But what if you're making 10 sandwiches for you and your best friends? You could do the above 10 times, but you'll find yourself cleaning your knife a lot and it would take you 5 minutes (30 seconds \* 10), so instead you put out 20 slices of bread, paint half of them with peanut butter, then clean your knife, then paint the other half with jelly. Then you clean your knife and put it away. Then you put all the breads together and enjoy, and you find it took you half the time of 2 minutes 30 seconds! So efficient, and your friends are all impressed.

That might make sense, but maybe you live in a tiny San Francisco apartment and you only have a small amount of space to work with. The second solution made sense given infinite prep space, but now the constraints of the problem have changed, and you actually do have to do the first method 10 times. It still takes 5 minutes, life is suffering but you work with what you got.

You can expect to find these sort of changing constraints in software engineering as well. Perhaps the preparation space size is like the memory you have on your computer. You might have a huge dataset of like financial records from the entire year that's so big you can't fit it in memory. You can fit a day's worth of transactions in memory, so you read that in and sum up all of them. Then you read the next day's, and add that to the sum. Then you read the next, and eventually you have the sum for the entire year.

#### Scaling

You start a sandwich business, and need to make n=100 sandwiches. That takes 25 minutes. Then business gets big and it takes you 250 minutes.

```
n=10   t=2.5
n=100  t=25
n=1000 t=250
```

It's almost like each sandwich takes a constant amount of time to make, following the formula

```
sandwiches = time_in_minutes / 4
```

When graphed, this looks like a linear line. In computer science, we have a notation for something that takes linear-time, and call it Big-O notation. It looks like this:

```
O(n)
```

Let's say you have a magic genie who will grant you any wish. You already used your first two wishes on stupid stuff, so now you want to make a wish for a lot of sandwiches. Only deal is you have to type out how many sandwiches you want on a calculator, and you can only press a button on the calculator once every minute. So you start out... you press "100"... you're about to get nearly 100 sandwiches, but it took you 3 minutes to press that. One minute later "1000"... One minute later "10000"... every minute that goes by you get 10 times as many sandwiches. It's like your sandwiches are increasing exponentially. In Big-O it looks like this:

```
O(n^10)
```

Typically you will usually see O(n^2) because computers tend to do things in binary, and because `if` statements tend to make binary choices of "do this or do that".

So now the genie gets annoyed. He's like just say what you want, nevermind the calculator. So you say "I would like ten billion sandwiches". You get it. Cool, you solved world hunger. You could have said any number, and it takes just as much time. We call this "constant time", and you'll see this referred to as

```
O(1)
```

The "1" here could be 20, or 50. It's still 1, because there are no units and no scale.

### Common Mistakes / Misconceptions

- There is always a best algorithm for any problem

  Not true! With any algorithm there are tradeoffs. Maybe one algorithm can sum up all of the numbers in a table in 4 minutes, but it _always_ takes 4 minutes no matter if there are 10 rows or 10,000 rows. Another algorithm might take 2 seconds to run per row, which is great when you have 10 rows, but when you have 10,000 and you've been waiting 5 hours for your query to come back and it's Friday night and your friends are all out having fun, you might wish it had finished in 4 minutes. Unless you don't like having fun. Life is full of choices.

### Independent Practice

Split into pairs, and have paper and a pen or pencil ready.
If someone gave you a page number, write step-by-step literal directions for how you would find that page in a book. Would your directions still work with a different page number?

### Check for Understanding

On your own, write step-by-step literal directions for how to find wifi for your laptop in a new building. What would you do if your first options failed? What would be the next step if they all failed?
