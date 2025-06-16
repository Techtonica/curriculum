# Python

### Projected Time

1-4 Hours

### Prerequisites

- Basic knowledge of programming concepts like variables, loops, control statements etc. and basic understanding of programming terminologies.

### Motivation

Python is a widely used and very powerful programming language.

### Objectives

- Understand the basics of python syntax
- Be able to identify all python data types and their uses
- Be able to write function calls that utilize conditionals and for loops
- Be able to construct a basic python class

### Specific Things to Learn

- Basic Syntax
- Variables and Data Types
- Functions
- Operators
- String Operators
- Conditionals
- Loops
- Classes

### Materials

- [https://www.tutorialspoint.com/python/python_variable_types.htm](https://www.tutorialspoint.com/python/python_variable_types.htm)
- [https://www.tutorialspoint.com/python/python_basic_syntax.htm](https://www.tutorialspoint.com/python/python_basic_syntax.htm)
- [http://www.openbookproject.net/books/bpp4awd/ch04.html](http://www.openbookproject.net/books/bpp4awd/ch04.html)

### Lessons

#### Basic Syntax

Blocks of code are indicated by line separations and indentation instead of curly braces or semi-colons like other languages.

```python
if True:
    print "True"
else:
    print "False"

```

Statements in python typically end with a new line, but you can construct multi-line statements with a backslash.

```python
total = item_one + \
        item_two + \
        item_three

```

Python accepts single ('), double (") and triple (''' or """) quotes to denote string literals, as long as the same type of quote starts and ends the string.

```python
word = 'word'
sentence = "This is a sentence."
paragraph = """This is a paragraph. It is
made up of multiple lines and sentences."""
```

Comments begin with a hashtag (#)

```python
# This is a comment
```

When assigning variables, you do not need to indicate their type.

```python
name = "Fred"
age = 31
```

#### Variables and Data Types

Python supports the following data types:

- Boolean - True or False
- Number Types - Integer (1) - Long (51924361L) - Float (0.0)
- Strings - Strings in Python are identified as a contiguous set of characters represented in the quotation marks. Python allows for either pairs of single or double quotes. Subsets of strings can be taken using the slice operator ([ ] and [:] ) with indexes starting at 0 in the beginning of the string and working their way from -1 at the end. ('Hello World!')
- Lists - Lists are the most versatile of Python's compound data types. A list contains items separated by commas and enclosed within square brackets ([]). To some extent, lists are similar to arrays in C. One difference between them is that all the items belonging to a list can be of different data type.
  ([1, 2, 3])
- Tuples - A tuple is another sequence data type that is similar to the list. A tuple consists of a number of values separated by commas. Unlike lists, however, tuples are enclosed within parentheses. ((1, 2), (2, 4))
- Dictionaries - Python's dictionaries are kind of hash table type. They work like associative arrays or hashes found in Perl and consist of key-value pairs. A dictionary key can be almost any Python type, but are usually numbers or strings. Values, on the other hand, can be any arbitrary Python object. ({'a': 1})
- None - Indicates a null value

#### Functions

Functions in python are defined by the word "def" and return values using the return statement.

```python
def add_one(num):
	return num + 1
```

#### Operators

- Arithmetic: - +, -, \*, /,//(floor division),\*\*(exponentiation), and % (modulus)
- Comparison: - ==, !=, <, >, <=, >=
- Logical: - and, or, not

-Identical:
is, is not

-Membership:
in, not in

#### String Operators

- Concatenation is done with the + operator.
- Converting to numbers is done with the casting operations: - x = 4 - int("3")
- You can convert to a string with the str casting function: - s = str(3.5)
- Assigning a string

```python
name = "Lee"
```

- Comparing Strings: - Strings can be compared with the standard operators listed above: - ==, !=, <, >, <=, and >=.
- Convert a string to upper / lowercase using the lower and upper functions

```python
sample_string = "This is a string."
sample_low = sample_string.lower()  # "this is a string"
sample_up = sample_string.upper()  # "THIS IS A STRING"
```

- Split a string using the split function. This splits a single string into a string array using the separator defined. If no separator is defined, whitespace is used.

```python
sample_string = "This is a string."
split_string = sample_string.split()  # ['This', 'is', 'a', 'string.']
```

#### Conditionals

##### If Statements

In order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly. Conditional statements give us this ability. The simplest form is the if statement, which has the general form:

```python
if BOOLEAN EXPRESSION:
    STATEMENTS
```

A few important things to note about if statements:

- The colon (:) is significant and required. It separates the header of the compound statement from the body.
- The line after the colon must be indented. It is standard in Python to use four spaces for indenting.
- All lines indented the same amount after the colon will be executed whenever the BOOLEAN_EXPRESSION is true.

##### If Else Statements

It is frequently the case that you want one thing to happen when a condition it true, and something else to happen when it is false. For that we have the if else statement.

```python
if food == 'spam':
    print('Ummmm, my favorite!')
else:
    print("No, I won't have it. I want spam!")
```

##### Chained Conditionals

Sometimes there are more than two possibilities and we need more than two branches. One way to express a computation like that is a chained conditional:

```python
if x < y:
    STATEMENTS_A
elif x > y:
    STATEMENTS_B
else:
    STATEMENTS_C
```

#### For Loops

The for loop processes each item in a sequence, so it is used with Python’s sequence data types - strings, lists, and tuples.

Each item in turn is (re-)assigned to the loop variable, and the body of the loop is executed.

The general form of a for loop is:

```python
for LOOP_VARIABLE in SEQUENCE:
    STATEMENTS
```

#### While Statement

Like the branching statements and the for loop, the while statement is a compound statement consisting of a header and a body. A while loop executes an unknown number of times, as long at the BOOLEAN EXPRESSION is true.

```python
while BOOLEAN_EXPRESSION:
    STATEMENTS
```

#### Classes

Python is an object oriented programming language. Unlike procedure oriented programming, where the main emphasis is on functions, object oriented programming stress on objects.

Object is simply a collection of data (variables) and methods (functions) that act on those data. And, class is a blueprint for the object.

We can think of class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows etc. Based on these descriptions we build the house. House is the object.

As many houses can be made from a description, we can create many objects from a class. An object is also called an instance of a class and the process of creating this object is called instantiation.

Simple Example:

```python
class Employee:
   'Common base class for all employees'
   empCount = 0

   def __init__(self, name, salary):
      self.name = name
      self.salary = salary
      Employee.empCount += 1

   def displayCount(self):
     print "Total Employee %d" % Employee.empCount

   def displayEmployee(self):
      print "Name : ", self.name,  ", Salary: ", self.salary
```

### Common Mistakes / Misconceptions

Be very careful where you place indentations because the wrong code could get excecuted or you could have errors.

Sample:

```python
if x == 1:
	print 'equal'
else:
	print 'not equal'
print 'always executed'
```

### Guided Practice

- Create some basic classes, a Shapes class and Square subclass.
- Create a function with an if / else statement that only prints "hello" if the argument is an even number.

### Independent Practice

- Create a function that will take a string argument and return that string in all uppercase letters.

- Create a for loop that will add 1 to a number each time it iterates.

### Challenge

- Combine an if / else statement with a for loop inside of a function.

### Check for Understanding

Create a class with methods that utilize each of the lessons learned above.
