# _nology challenges

This is the repository for _nology challenges relating to HTML and CSS challenges.

All solutions can be viewed here: <https://htmlchallenges.nology.io/>

## Getting started

### Create a Fork

Students should complete the challenges in their own forked version of the challenges repository.

1. To fork this repository click the fork button in the top right of the repository page on github.

2. If asked, select your own github account as the place to host the forked version.

### Completing a challenge

We follow github flow for each challenge. This means creating a new branch, completing the challenge and submitting a pull request.

1. Create a branch from master. The branch name should be that of the challenge being done, e.g. text-grouping
```
git checkout -b <challenge-name>
```
2. Complete the challenge by writing your code in the challenge/index.html and challenge/main.css files (there are template challenge files included for you to use).
3. Commit your work as you complete the challenge and push up the branch to github.
4. When ready, create a pull request and assign a trainer as a reviwer.
5. If approved you can close the pull request and merge the code. If there are comments then continue commiting your work on the existing branch and push to github, this will appear in the pull request.

**Note:** If the extension is building in more functionality ontop of the base challenge then you can add it to the same index.html and main.css. 

### Updating your Fork

You will need to do this if we update the main challenges repo and want you to have the changes in your forked repository.

1. Navigate into you repository folder in your machines command line

2. Run the following command

```JavaScript
git pull https://github.com/nology-tech/html-css-challenges.git master
```
