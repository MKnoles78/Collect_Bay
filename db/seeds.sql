USE collection_db;

INSERT INTO collections (name, category, itemNum)
VALUES ("Amazing Spider-Man", "Comics", 300);

select * from collections;

INSERT INTO cards (category, manufacturer, player, year, quality)
VALUES ("Cards", "Topps", "Barry Bonds", 1987, "Fair");

select * from cards;

INSERT INTO Comics (category, publisher, title, issue, quality)
VALUES ("Comics","Marvel", "Amazing Fantasy", 15, "Mint");

select * from comics;

INSERT INTO Records (category, artist, album, quality)
VALUES ("Records","Prince", "Purple Rain", "Mint");

select * from records;

INSERT INTO stamps (category, origincountry, class, postmark, quality)
VALUES ("Stamps", "United States", "Commerative", "TRUE", "Fair");

select * from stamps;

INSERT INTO toys (category, manufacturer, make, model, quality)
VALUES ("Toys", "Mattel", "Barbie", "Christmas Edition", "Mint");

select * from toys;

INSERT INTO wines (category, vineyard, style, variety, vintage, winegrade)
VALUES ("Wines", "Mondavi", "Red", "Merlot", 1985, 90);

select * from wines;
 
