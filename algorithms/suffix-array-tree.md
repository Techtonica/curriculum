### Suffix Arrays & Suffix Trees

## Topic Outline Time

- Reading: 45 minutes
- Activities: 90 minutes
- Total: ~2.5 hours


## Prerequisites

- [Data Structures](https://github.com/Techtonica/curriculum/blob/main/data-structures/intro-to-data-structures.md)
- [Trees](https://github.com/Techtonica/curriculum/blob/main/data-structures/trees.md)
- [Runtime Complexity](https://github.com/Techtonica/curriculum/tree/main/runtime-complexity)
- [Sorting Algorithms](https://github.com/Techtonica/curriculum/blob/main/algorithms/sorting.md)


## Motivation

Suffix arrays and suffix trees are powerful data structures used for text processing and pattern matching. They're essential tools for:

- Efficient substring searches
- Bioinformatics (DNA sequence matching)
- Data compression
- Full-text indexing in search engines
- Solving complex string problems in competitive programming


Understanding these structures will significantly improve your ability to work with string data efficiently.

## Objectives

After completing this lesson, you will be able to:

1. Explain what suffix arrays and suffix trees are
2. Understand how these data structures are constructed
3. Implement a basic suffix array
4. Use suffix arrays to solve common string problems
5. Recognize when to apply suffix trees vs. suffix arrays
6. Analyze the time and space complexity of operations on these structures


## Specific Things to Learn

- Suffix array definition and properties
- Naive and efficient suffix array construction
- Common applications of suffix arrays
- Suffix tree definition and relationship to suffix arrays
- Implementing longest common prefix (LCP) arrays
- Pattern matching with suffix arrays
- Space and time complexity considerations


## Activities

### Activity 1: Understanding Suffix Arrays

A suffix array is an array of integers representing the starting positions of all suffixes of a string, sorted lexicographically.

For example, consider the string "banana":

- Suffixes: "banana", "anana", "nana", "ana", "na", "a"
- Sorted suffixes: "a", "ana", "anana", "banana", "na", "nana"
- Suffix array: [5, 3, 1, 0, 4, 2] (starting positions of sorted suffixes)


#### Step-by-Step: Building a Naive Suffix Array

1. Generate all suffixes of the string
2. Sort the suffixes lexicographically
3. Store the starting positions of the sorted suffixes


<details>`<summary>`Naive Suffix Array Implementation (JavaScript)`</summary>`

```javascript
function buildSuffixArray(text) {
  // Add a terminal character to ensure unique sorting
  text = text + '$';
  
  // Create array of suffix objects with their starting positions
  const suffixes = [];
  for (let i = 0; i < text.length; i++) {
    suffixes.push({
      index: i,
      suffix: text.substring(i)
    });
  }
  
  // Sort suffixes lexicographically
  suffixes.sort((a, b) => {
    if (a.suffix < b.suffix) return -1;
    if (a.suffix > b.suffix) return 1;
    return 0;
  });
  
  // Extract the sorted indices
  const suffixArray = suffixes.map(item => item.index);
  
  return suffixArray;
}

// Example usage
const text = "banana";
const suffixArray = buildSuffixArray(text);
console.log("Text:", text);
console.log("Suffix Array:", suffixArray);
```

</details>Try it yourself! Implement the naive suffix array construction for the string "hello" and verify your results.

### Activity 2: Efficient Suffix Array Construction

The naive approach has O(n²log(n)) time complexity due to string comparisons during sorting. More efficient algorithms exist:

#### Prefix Doubling Algorithm

This approach builds the suffix array by iteratively doubling the prefix length used for comparisons.

<details>`<summary>`Prefix Doubling Implementation (Python)`</summary>`

```python
def build_suffix_array(text):
    """Build suffix array using prefix doubling."""
    text = text + '$'
    n = len(text)
    
    # Initial ranking of characters
    char_to_int = {char: i for i, char in enumerate(sorted(set(text)))}
    rank = [char_to_int[char] for char in text]
    suffix_array = list(range(n))
    
    # Temporary array for storing new ranks
    new_rank = [0] * n
    
    # Iterate with increasing k (length of prefix to consider)
    k = 1
    while k < n:
        # Sort by rank pairs (rank[i], rank[i+k])
        # If i+k >= n, use -1 as second rank
        suffix_array.sort(key=lambda i: (rank[i], rank[i + k] if i + k < n else -1))
        
        # Update ranks
        new_rank[suffix_array[0]] = 0
        for i in range(1, n):
            prev = suffix_array[i-1]
            curr = suffix_array[i]
            
            # Check if current suffix has same rank pair as previous
            if (rank[curr], rank[curr + k] if curr + k < n else -1) == \
               (rank[prev], rank[prev + k] if prev + k < n else -1):
                new_rank[curr] = new_rank[prev]
            else:
                new_rank[curr] = new_rank[prev] + 1
        
        rank = new_rank.copy()
        
        # If all suffixes have unique ranks, we're done
        if rank[suffix_array[-1]] == n - 1:
            break
            
        k *= 2
    
    return suffix_array

# Example usage
text = "banana"
suffix_array = build_suffix_array(text)
print(f"Text: {text}")
print(f"Suffix Array: {suffix_array}")
```

</details>

### Activity 3: Longest Common Prefix (LCP) Array

The LCP array stores the length of the longest common prefix between adjacent suffixes in the sorted suffix array.

<details>`<summary>`LCP Array Implementation (JavaScript)`</summary>`

```javascript
function buildLCPArray(text, suffixArray) {
  const n = text.length;
  
  // Create inverse suffix array
  // This helps us find the position of a suffix in the suffix array
  const inverseSA = new Array(n);
  for (let i = 0; i < n; i++) {
    inverseSA[suffixArray[i]] = i;
  }
  
  // Initialize LCP array
  const lcp = new Array(n).fill(0);
  
  // Initialize length of previous LCP
  let k = 0;
  
  for (let i = 0; i < n; i++) {
    if (inverseSA[i] === n - 1) {
      // The last suffix in sorted order
      k = 0;
      continue;
    }
    
    // j is the next suffix in sorted order
    const j = suffixArray[inverseSA[i] + 1];
    
    // Extend the previous LCP value
    while (i + k < n && j + k < n && text[i + k] === text[j + k]) {
      k++;
    }
    
    lcp[inverseSA[i]] = k;
    
    // Update k for the next iteration
    if (k > 0) k--;
  }
  
  return lcp;
}
```

</details>

### Activity 4: Pattern Matching with Suffix Arrays

Let's implement a function to find all occurrences of a pattern in a text using a suffix array:

<details>`<summary>`Pattern Matching Implementation (Python)`</summary>`

```python
def find_pattern(text, pattern, suffix_array):
    """Find all occurrences of pattern in text using suffix array."""
    n = len(text)
    m = len(pattern)
    
    # Binary search to find the lower bound
    left, right = 0, n - 1
    first_occurrence = -1
    
    while left <= right:
        mid = (left + right) // 2
        suffix_start = suffix_array[mid]
        suffix = text[suffix_start:suffix_start + m]
        
        if suffix >= pattern:
            right = mid - 1
            if suffix.startswith(pattern):
                first_occurrence = mid
        else:
            left = mid + 1
    
    if first_occurrence == -1:
        return []  # Pattern not found
    
    # Binary search to find the upper bound
    left, right = first_occurrence, n - 1
    last_occurrence = first_occurrence
    
    while left <= right:
        mid = (left + right) // 2
        suffix_start = suffix_array[mid]
        suffix = text[suffix_start:suffix_start + m]
        
        if suffix.startswith(pattern):
            last_occurrence = mid
            left = mid + 1
        else:
            right = mid - 1
    
    # Return all occurrences
    return [suffix_array[i] for i in range(first_occurrence, last_occurrence + 1)]

# Example usage
text = "banana"
pattern = "na"
suffix_array = build_suffix_array(text)[:-1]  # Remove the terminal character
occurrences = find_pattern(text, pattern, suffix_array)
print(f"Pattern '{pattern}' found at positions: {occurrences}")
```

</details>

### Activity 5: Introduction to Suffix Trees

A suffix tree is a compressed trie containing all suffixes of a string. Each suffix tree has:

- Root node
- Internal nodes (representing common prefixes)
- Leaf nodes (representing complete suffixes)
- Edges labeled with substrings


Suffix trees can be built from suffix arrays, but direct construction algorithms like Ukkonen's algorithm are more common.

<details>`<summary>`Basic Suffix Tree Node Structure (Java)`</summary>`

```java
class SuffixTreeNode {
    Map<Character, SuffixTreeNode> children;
    int startIndex;
    int endIndex;
    
    public SuffixTreeNode() {
        children = new HashMap<>();
        startIndex = -1;
        endIndex = -1;
    }
    
    public boolean isLeaf() {
        return children.isEmpty();
    }
    
    public void addChild(char c, SuffixTreeNode node) {
        children.put(c, node);
    }
    
    public SuffixTreeNode getChild(char c) {
        return children.get(c);
    }
    
    public boolean hasChild(char c) {
        return children.containsKey(c);
    }
}
```

</details>

### Activity 6: Practical Applications

#### Longest Repeated Substring

Using suffix arrays and LCP arrays, we can find the longest repeated substring in a text:

<details>`<summary>`Longest Repeated Substring Implementation (JavaScript)`</summary>`

```javascript
function longestRepeatedSubstring(text, suffixArray, lcpArray) {
  let maxLength = 0;
  let maxIndex = 0;
  
  for (let i = 0; i < lcpArray.length; i++) {
    if (lcpArray[i] > maxLength) {
      maxLength = lcpArray[i];
      maxIndex = i;
    }
  }
  
  if (maxLength === 0) {
    return "No repeated substring found";
  }
  
  // The longest repeated substring starts at suffixArray[maxIndex]
  return text.substring(suffixArray[maxIndex], suffixArray[maxIndex] + maxLength);
}

// Example usage
const text = "banana";
const suffixArray = buildSuffixArray(text);
const lcpArray = buildLCPArray(text, suffixArray);
const longestRepeated = longestRepeatedSubstring(text, suffixArray, lcpArray);
console.log("Longest repeated substring:", longestRepeated);
```

</details>

#### Longest Common Substring

Finding the longest common substring between two strings using suffix arrays:

<details>`<summary>`Longest Common Substring Implementation (Python)`</summary>`

```python
def longest_common_substring(s1, s2):
    """Find the longest common substring between s1 and s2 using suffix arrays."""
    # Concatenate strings with a unique separator
    combined = s1 + '#' + s2 + '$'
    n1, n2 = len(s1), len(s2)
    n = len(combined)
    
    # Build suffix array for combined string
    suffix_array = build_suffix_array(combined)
    
    # Build LCP array
    lcp_array = build_lcp_array(combined, suffix_array)
    
    # Find the maximum LCP between suffixes from different strings
    max_length = 0
    max_index = 0
    
    for i in range(1, n):
        # Check if adjacent suffixes in suffix array come from different strings
        curr_suffix = suffix_array[i]
        prev_suffix = suffix_array[i-1]
        
        # One suffix from s1, one from s2
        if (curr_suffix < n1 and prev_suffix > n1) or (curr_suffix > n1 and prev_suffix < n1):
            if lcp_array[i-1] > max_length:
                max_length = lcp_array[i-1]
                max_index = min(curr_suffix, prev_suffix)
    
    if max_length == 0:
        return "No common substring found"
    
    return combined[max_index:max_index + max_length]
```

</details>

### Activity 7: Challenge Problems

Try solving these problems using suffix arrays or suffix trees:

1. Find all unique substrings of a string
2. Implement a function to check if one string is a substring of another
3. Find the lexicographically smallest rotation of a string
4. Implement a basic text search engine using suffix arrays


## Additional Resources

- [Suffix Arrays - Stanford CS166](http://web.stanford.edu/class/cs166/lectures/04/Small04.pdf)
- [Suffix Trees and Arrays - UC San Diego](https://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16.pdf)
- [Visualizing Suffix Trees](https://visualgo.net/en/suffixtree)
- [The Art of Computer Programming, Vol. 3: Sorting and Searching](https://www-cs-faculty.stanford.edu/~knuth/taocp.html) by Donald Knuth
