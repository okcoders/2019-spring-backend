# Modeling Exercise

* Create a users collection
* Create 3 or 4 documents with the following attributes
	* Firstname
	* Lastname
	* DOB
	* Phone
	* Address

This will work OK as long as we never have more than one phone number or address.  We could try and fix it by adding additional/specific attributes like "Business Phone" or "Home Address" but what happens if we need more than one home phone number?  And how do we know if we can cover all possible combinations.  It we keep trying to add attributes we would get something like "Home Phone 1", "Home Phone 2", et al.  Ths is not a good solution.



## Additional Resources

(https://docs.mongodb.com/manual/core/data-modeling-introduction/)[MongoDB Modeling Basics)]
(https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-one-relationships-between-documents/)[One-to-One Relationships]
(https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/)[One-to-Many Relationship]
(https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/)[Many-to-Many Relationship]
