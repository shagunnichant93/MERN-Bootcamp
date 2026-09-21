Interview Questions
Q1. What is the main difference between SQL and NoSQL?

Answer: SQL databases primarily use relational tables with structured schemas, while NoSQL databases use other data models. MongoDB uses a document-oriented model.

Q2. Is MongoDB schema-less?

Good interview answer:

MongoDB has a flexible schema by default. Documents in the same collection can have different fields, but applications can still enforce validation and schema rules.

Avoid saying simply:

"MongoDB has no schema."

Q3. What is the MongoDB equivalent of a SQL table?

Answer:

A collection.

Q4. What is the MongoDB equivalent of a SQL row?

Answer:

A document.

Q5. What is the MongoDB equivalent of a SQL column?

Answer:

A field.

Q6. Does MongoDB support transactions?

Answer:

Yes. MongoDB supports transactions, including multi-document transactions.

Scenario Interview Question
Scenario

You are building an e-commerce application.

A product can have different attributes.

For example:

Laptop:
RAM
Processor
Screen Size

while:

Shirt:
Size
Color
Material

Would MongoDB's flexible document model be useful?

Answer

Yes.

Different product documents can contain different attributes naturally.

For example:

{
    name: "HP Laptop",
    category: "Laptop",
    price: 65000,
    specifications: {
        ram: "16GB",
        processor: "Intel i5",
        screenSize: "15.6 inch"
    }
}

Another document:

{
    name: "Cotton Shirt",
    category: "Shirt",
    price: 1200,
    specifications: {
        size: "L",
        color: "Blue",
        material: "Cotton"
    }
}

This is a good example of where a document model can naturally represent varying product attributes.

Practice Exercise

Without looking back, complete this:

SQL Server              MongoDB
------------------------------------
Database                ?
Table                   ?
Row                     ?
Column                  ?
Primary Key             ?
JOIN                    ?

Then answer:

1.

Why can two documents in the same MongoDB collection have different fields?

2.

Is MongoDB completely schema-less?

3.

Does MongoDB support transactions?

4.

Why might embedding an address inside a customer document be useful?

5.

Give one situation where a relational database may be preferable to MongoDB.