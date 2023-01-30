const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    userEmail: {
      type: String,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

tweetSchema.virtual("ContentWithEmail").get(function process() {
  return `${this.content} was created by \n ${this.userEmail}`;
});

tweetSchema.pre("save", () => {
  console.log("i am a middleware");
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
