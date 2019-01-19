# Overview

Who has experience with databases?  Which ones?  What type of data did you store and for what purpose? 

* Modeling
	* Objects/Documents
	* Attributes
		* Data
		* Type
	* Collections
		* Unique Identifiers
	* Relationships
		* One-to-one (has-a or belongs-to)
		* Many-to-one
		* Many-to-many

## SQL

Common examples are PostgreSQL, MySQL, SQLServer, and Oracle.  

* Access: SQL
* Object: Row
* Attribute: Column
* Collections: Database
* Relationships: Foreign keys
* UID: User Defined

## Document

Also Called NoSQL, Non-Relational.  Common examples are BigTable, HBase, Cassandra, Mongo, Redis

* Access: ???
* Object: Document
* Attribute: Tag
* Collection: Container/Store 
	* collection does not require that you define a schema in advance f
	* a collection supports nested data
* Relationships: Tag
* UID: ?

### Other notes

* Mongo stores as JSON objects.
* Scheme repetes
* Relationships can be respresented in many different ways.

## CRUD

		CRUD Operation  | Command       | SQL      
		----------------|---------------|--------------
			create        |   insert      |    insert  
			read          |   find        |    select  
			update        |   update      |    update  
			delete        |   remove      |    delete  


The CRUD operators are all performed on the `db` object in the mongo client, and further on another object that targets the collection for the command. For example, if you want to work with documents in a `posts` collection, your commands will begin with `db.posts`. The commands will then be methods on this `db.posts` object.

If you want to make changes to the comments collection, use `db.comments`. `db` here always refers to the currently used database.

## MongoDB

* Terminal 1: mongod --dbpath db
* Terminal 2: mongo
	* show dbs
	* use blog
	* show dbs

### CRUD

#### CREATE 

Notice the UID being created for us

```
db.posts.insert({
	title: "The email line that's client repellent",
	body: "I’d gone through a few droughts as a freelancer",
	author: "OK Coders"
})
show collections
```

#### RETRIEVE

Simple
```
db.posts.find()
```

Select where
```
db.posts.find({
_id: ObjectId("53cd2309b3f624fc17ca5cc9")
})
```

Regular Expressions
```
db.posts.find({
	title: /^the/i
})
```

Conditional
```
db.posts.find( {}, {title: true} )
```

Sort & limit
```
db.posts.find().sort( { author: 1 } )

db.posts.find().skip(2).limit(1)

```

#### UPDATE

Take 2 arguments, a "find" and "do" 

```
db.posts.update({
	_id: ObjectId("53cd2309b3f624fc17ca5cc9")
},
{
	$set: {
		title: "New title for this post"
	}
})
```

#### DELETE

Delete a single post, again with the "find" argument

```
db.posts.remove({
	_id: ObjectId("53cd2309b3f624fc17ca5cc9")
})
```

Delete everything

```
db.posts.remove({})
```

Advanced  delete $and $or

AND and OR

$and: [{}, {}]
$or: [{}, {}]

```
db.example.find({ $and: [{$or: [{name: "zach"}, {name: "test"}]}, {$or: [{diet: "veg"}, {wow: "oh"}]}]})
````

### Sublimiting Results

Find can actually take an additional argument that allows you to limit the data returned:

```
> db.posts.find( {}, {title: true} )
```

### Nesting

Insert an array as a data type
```
> db.posts.insert({
	title: "Keywords test",
	body: "Lorem ipsum",
	author: "Mr. T",
	keywords: [ "node", "mongo", "okcoders" ]
})
```

Search on it like anything else
```
> db.posts.find({
	keywords: 'node'
})
```

Or Objects
```
> db.posts.insert({
	title: "Nested author test",
	body: "Lorem ipsum",
	author: {
		id: 1,
 		name: "OK Coders"
	}
})
```

Then select specific ones with dot notation
```
> db.posts.find({
	"author.name": 'OK Coders'
})
```

## Regular Expressions

Find title that begins with the word **the** regardless of the case:

```
> db.posts.find({
	title: /^the/i
})
```

## Cursor Methods

Use *after* our find methods to sub-limit the return values.  

* sort()
* limit()
* skip()
