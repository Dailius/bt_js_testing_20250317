1. Introduction
2. Version Control Systems (git, GitHub)

## 1. Introduction


## 2. Version Control Systems (git, GitHub)

### 1st way
1. create repo locally
```bash
mkdir git_hello_world_01
cd ./git_hello_world_01 # just click on [TAB] button
git init

code . -n # open vscode in new window with current directory

ni hello.txt 
# or for linux or MAC platforms
touch hello.txt

git status
git add .
git commit -m "Initial commit"
# ... process continue
```
2. create GitHub repo

3. connect (push) local and remote repo
```bash
git remote add origin https://github.com/Dailius/bt-20250317-git_hello_01.git
git branch -M main
git push -u origin main
```

### clone repo locally
```bash
git clone <repo_full_path>

# or clone this repo locally
git clone https://github.com/Dailius/bt_js_testing_20250317.git
``` 

### send/receive updates
```bash
git push # send new commits to GitHub
git pull # receive new commits from GitHub 
```

