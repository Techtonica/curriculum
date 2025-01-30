# You are given two strings:

# inputStr: A string containing only lowercase letters (length 1 <= inputStr.length <= 1000)
# targetStr: A substring to search for (length 1 <= targetStr.length <= 100)
# Your task is to implement a function findTargetIndex(inputStr, targetStr) that returns:

# The starting index of the first occurrence of targetStr in inputStr
# -1 if targetStr is not found in inputStr
# Examples:

# findTargetIndex("hello world", "lo") should return 3
# findTargetIndex("programming", "abc") should return -1
# findTargetIndex("javascript", "script") should return 4
# findTargetIndex("challenge", "len") should return -1


def findTargetIndex(inputStr, targetStr):
    # Check if targetStr is empty

    # Use str.find() method to get the index of the first occurrence

  
# Test cases
test_cases = [
    ("hello world", "lo"),
    ("programming", "abc"),
    ("javascript", "script"),
    ("challenge", "len")
]

# Run each test case and print the result
for input_str, target_str in test_cases:
    result = findTargetIndex(input_str, target_str)
    print(f"Input: '{input_str}', Target: '{target_str}' -> Index: {result}")