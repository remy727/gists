The ActiveRecord query to retrieve records that are missing associated records with a specific attribute.
For example, find authors who don’t have books written in `Elvish`

### Before
```ruby
Author
  .where.missing(:books)
  .where(books: {language: :elvish})

# That generates this SQL
SELECT * FROM "authors"
LEFT OUTER JOIN "books" ON "books"."author_id" = "authors"."id"
WHERE "books"."id" IS NULL
AND "books"."language" = "elvish"
```

### After
```ruby
class Author
  has_many :elvish_books, -> { where(language: "elvish") }, class_name: "Book"
end

Author.where.missing(:elvish_books)
```