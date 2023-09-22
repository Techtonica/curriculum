# Sorting Algorithms

### Projected Time

5-6 hours

### Prerequisites

- [Recursion](/recursion/recursion.md)
- [Searching](/algorithms/searching.md) (Particularly Binary Search)

### Motivation

Sorting is important in programming for the same reason it is important in everyday life. It is easier and faster to locate items in a sorted list than unsorted. Sorting algorithms can be used in a program to sort an array for later searching or writing out to an ordered file or report.[(by Siddharth Khuntwal)](https://www.quora.com/Why-is-sorting-important-in-computer-science-and-programming)

For example bubble sort, quick sort, and selection sort all take the same input and produce the same output but at different speeds. This is a nice way to show how different approaches can yield more efficient algorithms using approaches such as divide and conquer. On top of that, sorting algorithms don't require advanced data structures knowledge to understand. If you can understand arrays you can understand sorting algorithm examples.

### Objectives

**Participants will be able to:**

- Understand what an algorithm is.
- Understand what a sorting algorithm is.
- Understand the mechanics of a few sorting algorithms including Bubble Sort, Merge Sort, and Quick Sort.
- Understand the Runtime Complexity of these algorithms.

### Materials and Useful Videos

- [Sorting Algorithms Visualized](https://www.toptal.com/developers/sorting-algorithms/)
- [Bubble Sort With Hungarian Folk Dance](https://www.youtube.com/watch?v=lyZQPjUT5B4)
- [Merge Sort With German Folk Dance](https://www.youtube.com/watch?v=XaqR3G_NVoo)
- A Deck of Cards

### Pre-Lesson Warm Up and Game (30 minutes)

- Discussion topic: What is an algorithm? Can you give us an example of an algorithm?
  - An algorithm is a way for describing automated processes.
- Discussion topic: What is a Sorting Algorithm? Can you give us an example of something that we sort in our day-to-day lives?
  - A Sorting Algorithm orders items in a group according to a specificed attribute. ie: Order a roster of students by name, Order cartons of milk by expiration date.
- Discussion topic: Why do we need sorting algorithms in Computer Science?
  - Let's do a Card-Sorting activity. Partner up in groups of two or three and order cards from lowest to highest (all of the same suit). Give student groups a deck of cards and give them each a suit of cards to sort.
  - After 10 minutes of sorting, let's reflect on how we accomplished it. Did we sort the cards differently from the people in our partner groups? Did we compare a few at a time? Did we look for the lowest first and then go from there? Do you think we could sort in fewer "moves"?
  - After this Card-Sorting activity it's clear there are a lot of different ways to sort cards! This translates right to how computer scientists sort Lists. As Computer Scientists we have lots of different algorithms to use that allow us to sort - from Bubble Sort, to Merge Sort, to Quick Sort! Some algorithms aren't as fast as others (Obama knows not to use the Bubble Sort: [Watch video](https://www.youtube.com/watch?v=k4RRi_ntQc8)), but there are many tradeoffs to different algorithms!
  - Why is sorting important? Remember Binary Search last lesson? Well, we need a sorted list to do Binary Searching!

### Lesson (3 hours)

Remember how we can sort cards lots of different ways? Let's talk about all the ways computers sort Lists.

Let's start with a Bad Way To Sort:

#### BogoSort (10 minutes)

Say we want to sort a deck of cards:

1. Toss them in the air!
2. Pick them up one by one.
3. Are they sorted?
4. If not, repeat lines 1 - 3

Let's talk about the Complexity of BogoSort. Here's the pseudocode:

```JavaScript
while not Sorted(a)
   Shuffle(a)
```

_The best case?_

O(n) where n is the length of the list, because we have to check that the list is sorted.

_The worst case?_

O(????) because this could NEVER END if we get really unlucky.

Hopefully you can see why we never want to use this algorithm again.

#### Bubble Sort (30 minutes)

[Thanks, Obama](https://www.youtube.com/watch?v=k4RRi_ntQc8)

How does it work?

1. Compare consecutive pairs of elements.
2. Swap elements in the pair so that the smaller one is first.
3. When we reach the end of the list, start over!
4. Stop when no more swaps have been made.

Demonstration video: [Watch this Video](https://www.youtube.com/watch?v=Cq7SMsQBEUw) (useful in slo-mo)

Let's watch a folk dance interpretation of Bubble Sort: [Watch this video, It is also available in the materials section](https://www.youtube.com/watch?v=lyZQPjUT5B4)

Let's break into groups again and try out the sorting algorithm on our own decks of cards!

What's the Complexity of Bubble Sort?

```JavaScript
function bubble_sort(a)
{
    let swap;
    let n = a.length-1;
    let x=a;
    do {
        swap = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}
```

We have nested loops: the while-loop and the for-loop! The outer loop passes until there are no more swaps. Thus the runtime is O(n^2).

Group question: what state would the list be in for Bubble Sort to have the worst possible performance?

- If the smallest element of the list is at the back, Bubble Sort will perform at the absolute worst. Because in each iteration only the largest unsorted element gets put in its proper location. When the smallest element is at the end it will have to be swapped each time through the list and it won't get to the front of the list until all n iterations have occurred.

#### Selection Sort (15 minutes)

How does it work?

1. First step:
   1. Extract the smallest element.
   2. Swap it with the element at index 0.
2. Next step:
   1. In the remaining unsorted sublist extract the smallest element.
   2. Swap it with the element at index 1.
3. At the i'th step, the first i elements of the list are guaranteed to be sorted.

Demonstration video: [Watch this video](https://www.youtube.com/watch?v=92BfuxHn2XE)

What's the Complexity of Selection Sort?

```JavaScript
function selection_sort(a){
  for( let i = 0; i < a.length; i++ ){
    let small = i;
    for( let j = i + 1; j < a.length; j++ ){
      if( a[j] < a[small]){
        small = j;
      }
    }
    if(i !== small){
      let temp = a[i];
      a[i] = a[small];
      a[small] = temp;
    }
  }
  return a;
}
```

Again, there's a nested loop, so worst-case runtime is O(n^2)!

#### Can we do better than O(n^2)?????

#### Merge Sort (2 hours)

Merge Sort is a _divide and conquer_ algorithm. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.

What are we dividing and what are we conquering here?

Well, we divide the list into lots of sublists. In fact, we divide them into lists that are of size 1! At that point, we know a list of size 1 is sorted! This isn't intuitive, right? Let's dig in...

1. If a list is of length 0 or 1, it's already sorted!
2. If a list has more than one element, split it into two lists, and sort each.
3. Merge sorted sublists.
   1. Look at the first element of each, move smaller to the end of the result.
   2. When one list is empty, just copy the rest of the other list.

Let's review this video: [Watch this video, it is also available in the materials section](https://www.youtube.com/watch?v=KF2j-9iSf4Q)

This will be tough, but let's try implementing it ourselves!

Let's try just the merge (a, left, right, middle) function first.

```JavaScript
function merge (a, left, right, middle){
    n1 = middle - left +1;
    n2 = right - middle;
    let  L = [];
    let R = [];
    for(let i =0;i<n1;i++){
        L[i] = a[left + i ];
    }
    for(let j=0;j<n2;j++){
        R[j] = a[middle+j+1];
    }
    i = 0;
    j = 0 ;
    let k = left;
	while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
            a[k] = L[i++];
        else
	        a[k] = R[j++];
	    k++;
    }
	while (i < n1)
    {
	    a[k] = L[i];
	    i++;
	    k++;
	}
	while (j < n2)
	{
	    a[k] = R[j];
	    j++;
	    k++;
	}
}
```

Can we merge this with sample input? What if left = [1,3] and right = [2, 4]?

After an hour, let's complete the merge_sort function!

```JavaScript
function merge_sort (a, left, right){
    if(left < right){
        let middle = Math.floor((left +right)/2);
        merge_sort(a,left,middle);
        merge_sort(a,middle+1,right);
        merge(a,left,right,middle);
    }
}
```

Let's test it with this list: testList = [1,3,5,7,2,6,25,18,13]

### Independent Practice (2 hours)

Spend 3 hours writing steps for yourself on how to go about writing each algorithm: Bubble, Selection, Merge.
For example:

**Name of Algorithm**

1. Create this function and a helper function.
2. Flesh out the first function by creating variables and then using them in these ways.
3. Call helper function.
4. Flesh out the helper function by creating these variables and then using them in these ways.
5. Return helper result to first function.
6. This is why it worked!

If you're curious to read more there are lots of good resources out there!

[MIT Intro to CS Slides on Sorting](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-slides-code/MIT6_0001F16_Lec12.pdf)

[Harvey Mudd Lesson Plan on Sorting](https://www.cs.hmc.edu/MyCS/MyCS_all_handouts/Unit%205/PDF%20Sorting%20Algorithms%20Lesson%20Plan.pdf)

[SparkNotes on Sorting](http://www.sparknotes.com/cs/sorting/bubble/section1.rhtml)

https://www.toptal.com/developers/sorting-algorithms/

http://sorting.at/

### Challenge

1. Find out what Radix Sort is.
2. Find one more sorting algorithm we didn't mention.

### Check for Understanding

- What is a potential benefit of a Bubble Sort as compared to a Merge Sort?
- Which sort has the potential to be most positively influenced by initial ordering of the list?
- What is the benefit of recursion in sorting? Any drawbacks?

### Supplemental Resources

- [Sorting Algorithms Conceptually](https://code.likeagirl.io/sorting-algorithms-conceptually-2bfbb3968388)

#### Attribution

Thanks to the MIT OpenCourseWare site for Sorting Algorithm Code Examples! https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-slides-code/lec12_sorting.py
