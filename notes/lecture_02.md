1. Repeat
2. Version Control Systems (git, GitHub)
3. VIM text editor
4. CLI commands
5. Git branching


## 1. Repeat
Remote:
GitHub, GitLab, Bitbucket, Mercury

Locally:
Git, Mercury

OS:
Linux (Linus Torvalds): Ubuntu, Debian, Kali

Git:
status, add, commit
clone
push, pull

GitHub:
Actions (CI/CD), PU, Projects, Gists, Issues

## 2. Version Control Systems (git, GitHub)

GIT documentation:  
https://git-scm.com/docs  
https://git-scm.com/book/en/v2  


### 2nd way
1. create repo remotely (GitHub)
2. clone repo locally
3. Continue with project using git commands

```bash
# template: git checkout <commit_id>
git checkout 2bb09e1c25c

# full list of branch names
git branch

# template: git checkout <branch_name>
git checkout main

# changes inside files
git diff
```

## 3. VIM text editor

Close VIM editor:  
SHIFT + Z, SHIFT + Z, 

EDIT mode press `ESC` or just start enter some text.  

Open command input `SHIFT + ;`:  
>`i` - insert, switched from command mode
>`s` - replaces a single character
>`x` - delete character
>`3x` - delete multiple characters
>`d` - press twice to delete a line
>`u` - undo changes
>`q!` - **close VIM**
>`w` - save changes


## 4. CLI commands

```bash
# create new folder
mkdir folder_name

# open folder
cd folder_name

# navigate back
cd ..

# create new file
ni file_name
#  or
touch file_name

# clean terminal window
cls

# list folders and files
dir
# or for GitBash, Linux, MAC systems
ls -al

# delete
rm file_name
rm folder_name
```

## 5. Git branching
```bash
# branch list
git branch

# create branch
git branch branch_name

# create branch and checkout
git checkout -b branch_name

# merge branches
git checkout branch_name_to 
git merge branch_name_from "Commit name"
```

![](/pictures/git_branching.png)
