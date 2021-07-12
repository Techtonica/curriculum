We are using ZSH but Udacity expects you to use Bash. They are very similar, but they load configurations from different files. Complete the following steps before starting the Udacity course.

From your terminal, paste the following lines:
- `cd ~ # Navigate to your home directory`
- `atom .zshrc # Create a file named .zshrc if one does not already exist, and open it in Atom`

(If the second step fails, you may need to [install Atom](https://atom.io/) first)

In your Atom window, add the following lines to the bottm of .zshrc and then save:
```
# If bash profile exists, 
if [ -f ~/.bash_profile ]; then 
    . ~/.bash_profile;
fi
```
