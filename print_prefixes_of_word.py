# Take input from the user
word = input()

# Loop through the length of the word
for i in range(1, len(word) + 1):
    print(word[:i])
