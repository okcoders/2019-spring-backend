## exercise

Answer these questions from the sample dataset

http://www.rockerssoft.org/docs/enron.zip

You can use this command to import the data into a database called `enron` into a collection called `emails`

```bash
mongoimport --db enron --collection emails --drop --file enron.json
```

Be sure to not only answer the questions, but show HOW you got the answer.  We are looking to create some example queries in mongodb.

1. how many emails are there?
2. what is the earliest email (in terms of date)
3. what is the latest email?
4. what sender sent the most emails?
5. do any emails contain the word "money" in their text?
6. How many emails contain the word "invest"?
7. How many users only sent 1 email?
8. Get a list of all non-enron email addresses? How many are there? 

## Example answers
2. 2002-01-30 11:48:06-08:00
	db.emails.find().sort({date: -1}).limit(1)

4. rosalee.fleming@enron.com
	db.emails.aggregate([{$group: {_id: "$sender", count: {$sum:1}}}, {$sort: {count: -1}}]

