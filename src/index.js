const express = require("express");

const app = express();

const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");

const TweetRepository = require("./repository/tweet-repository");

const Comment = require("./models/comment");
const Tweet = require("./models/tweet");
app.listen(PORT, async () => {
  console.log(`server started successfully at PORT ${PORT} `);

  await connect();

  console.log("Mongo Db connected");

  // const tweet = await Tweet.create({
  //   content: "this is the fourth  tweet",
  // });

  // const response = await Tweet.findById("63d3bc6f60a51d460b7714c1");

  // response.userEmail = "vivek";
  // await response.save();

  // console.log(response);

  // console.log(tweet);

  // const tweet = await repo.create({
  //   content: "this is the twitter content",
  // });

  // console.log(tweet);
  // tweet.userEmail.push({ content: "i am inside the array" });

  // await tweet.save();

  const repo = new TweetRepository();

  // const tweet = await repo.create({
  //   content: "this is the third twitter content section",
  // });

  // console.log(tweet);
  // const comment = await Comment.create({
  //   content: "this is the comment section",
  // });

  // tweet.comments.push(comment);

  // await tweet.save();

  // const getTweet = await repo.get("63d40307f90b32c6ace4747b");
  // const getTweet = await repo.getWithComments("63d40307f90b32c6ace4747b");

  // const getTweets = await repo.getAll(2, 2);
  // console.log(getTweets[0].ContentWithEmail);

  const tweet = await repo.create({
    content: "this is latest tweet by vivek ",
  });

  console.log(tweet);
});
