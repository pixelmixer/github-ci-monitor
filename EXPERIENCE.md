# Development Experience

## Approach
I took a step by step approach for this solution. The first step I took was to create the sample node application with failing builds and TravisCI integration.

Once the failing repository was set up I then followed the steps for creating a Probot application. These steps included instructions for setting up a new github app.

With the GitHub App created, I needed to initialize a new probot app. For this I used the starter template.

The steps involved in the approach to this initial verison:

1. Receive github "status" event for the `commit sha` and TravisCI `target url`.
2. Validate failed build status with the event payload.
3. Parse out the TravisCI `Build ID` based on the `target url`.
4. Use the TravisCI API to retrieve the `Build Log text file`.
5. Use the GitHub API to retrieve the relevant `commit sha` and list of `pull requests`.
6. Using the `commit sha` and list of `pull requests`, determine whether there is a pull request associated with the build error and return the `Pull Request number`.
7. Extract the Jest build errors from the `Build Log text file` and generate a useful `comment` with the resulting data.
8. Pass the `comment`, along with the `Pull Request number` and repo/owner name to the github api via the [issues.createComment](https://developer.github.com/v3/issues/comments/#create-a-comment) api method.

## Challenges
### **The `Create Comment` API**

One of the initial challenges I faced was finding where the data existed that I needed. First step was to look into how a comment is created. The documentation was a little unclear about this and I went down a short rabbit hole pursuing a method for creating a comment directly on a file.
That wasn't ideal because I wanted to add the comment directly to the Pull Request itself. Fortunately, it turns out that this can be done by using the [issues.createComment](https://developer.github.com/v3/issues/comments/#create-a-comment) method. This wasn't very well documented because the relationship between issues and pull requests didn't seem to be well documented.

### **Retrieving the `Pull Request Number`**
The next issue I ran into was finding the `:number` parameter required for submitting a comment. The documentation wasn't entirely clear about what `:number` meant so after some research I was able to determine that this actually meant the `issue number` (or `pull request number` for pull requests). This may be another opportunity to clarify the documentation.

### **`Parsing` the TravisCI Build Logs**
While it was fairly simple to get the TravisCI build logs, retrieving relevant details from the logs proved to be a bit more challenging. I chose to parse this out with regex. My first approach included parsing the plain text logs directly. Those logs were full of terminal formatting ansi text, which I stripped with the [strip_ansi library](https://github.com/chalk/strip-ansi#readme). After stripping the ansi text, I found that creating a few regex patterns allowed me to consistently extract the relevant Jest build details.

### **Creating meaningful `pull request comments`**
Once the technical hurdle of creating a comment was cleared I tried to address the question "what might a meaningful pull request comment look like?". In order to answer this question I had to include all of the build details as well as all of the related summaries. However, just dumping all of the useful build details into a comment caused the entire thread to become cumbersome I decided to separate the summaries from the details and include two sections, with the larger section being collapsible. Collapsible sections in github markdown and fairly well supported but it turns out the documentation for creating them isn't included in normal markdown documentation (likely because it uses an HTML element directly). Since this is such a useful thing in markdown I'd recommend adding this to the markdown documentation.
