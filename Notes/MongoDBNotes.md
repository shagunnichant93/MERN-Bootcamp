MongoDB hierarchy:

Database
    ↓
Collection
    ↓
Document
    ↓
Field

SQL → MongoDB

Database → Database
Table → Collection
Row → Document
Column → Field
Primary Key → _id

MongoDB uses BSON.

BSON = Binary JSON

MongoDB documents can contain:
- Strings
- Numbers
- Boolean
- Arrays
- Embedded documents
- Dates
- ObjectId
- Null
- Other BSON types

_id uniquely identifies a document within a collection.

MongoDB supports:
- Nested documents
- Arrays
- Arrays of objects
- Flexible document structures