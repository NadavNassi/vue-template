const gProducts = [
    {
        "id": "dde1fe5a-751e-40ad-bf07-859d1a8f6c51",
        "price": 168,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Tools",
        "title": "Handmade Steel Towels",
        "mainMaterial": "Cotton",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
    },
    {
        "id": "f20588a4-5459-4cb3-9ac0-8351352c1d74",
        "price": 1574,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Movies",
        "title": "Handcrafted Frozen Table",
        "mainMaterial": "Frozen",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
    },
    {
        "id": "40336cab-3fa5-4dd5-bd85-9a11c111500b",
        "price": 1462,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Baby",
        "title": "Handcrafted Rubber Bike",
        "mainMaterial": "Cotton",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
    },
    {
        "id": "342a2082-0744-4beb-9b27-dd34c930a799",
        "price": 830,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Baby",
        "title": "Refined Wooden Cheese",
        "mainMaterial": "Fresh",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "646a8b37-1389-4f5a-9a72-4be7fa78e4b4",
        "price": 1725,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Automotive",
        "title": "Handcrafted Granite Pants",
        "mainMaterial": "Metal",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
    },
    {
        "id": "391e5daf-318f-4a91-adf7-c2aad2e53ab0",
        "price": 1560,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Outdoors",
        "title": "Rustic Granite Keyboard",
        "mainMaterial": "Concrete",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "39a38059-d8d1-40e2-8cef-1ed2f7294184",
        "price": 1377,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Grocery",
        "title": "Awesome Soft Chair",
        "mainMaterial": "Granite",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "18ee4169-ece8-41b9-b361-dadcf61f7fbd",
        "price": 976,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Home",
        "title": "Ergonomic Fresh Tuna",
        "mainMaterial": "Metal",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "d9f9eb02-d485-4595-92cc-1dcc3d28f446",
        "price": 818,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Outdoors",
        "title": "Handmade Concrete Chips",
        "mainMaterial": "Frozen",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "730756da-d928-4dfe-9b78-a9e780c17307",
        "price": 945,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Home",
        "title": "Sleek Fresh Cheese",
        "mainMaterial": "Cotton",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "85454c43-8198-4301-90dc-6814c0126d9f",
        "price": 1520,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Shoes",
        "title": "Sleek Cotton Towels",
        "mainMaterial": "Frozen",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "b0154959-1bce-44c8-93e2-123082191209",
        "price": 62,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Automotive",
        "title": "Handmade Soft Chicken",
        "mainMaterial": "Granite",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
    },
    {
        "id": "f3500318-d298-4dcc-8270-433584d31d1a",
        "price": 226,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Electronics",
        "title": "Sleek Granite Bacon",
        "mainMaterial": "Cotton",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "60c67f75-25f1-4727-a5a3-db4c1bffc995",
        "price": 1527,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Gorgeous Plastic Pizza",
        "mainMaterial": "Frozen",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "5d51bcde-e2e4-4890-95e3-9429e7d86781",
        "price": 917,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Sports",
        "title": "Fantastic Concrete Shirt",
        "mainMaterial": "Soft",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "2cf8eb28-5752-47f6-9ace-e6c369c22c80",
        "price": 1115,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Industrial",
        "title": "Fantastic Granite Chair",
        "mainMaterial": "Soft",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "17b4a344-8ab1-43f2-9bbc-36b0f1c925ec",
        "price": 1051,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Garden",
        "title": "Sleek Cotton Bike",
        "mainMaterial": "Rubber",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "193f7e4c-5c8a-40c0-8b98-66652b7c8d94",
        "price": 814,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Clothing",
        "title": "Generic Steel Cheese",
        "mainMaterial": "Rubber",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
    },
    {
        "id": "c802b0b6-f33f-4858-984b-3f8c19e5b1e2",
        "price": 1798,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Shoes",
        "title": "Gorgeous Frozen Keyboard",
        "mainMaterial": "Fresh",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "a9f5e8e3-e62a-456e-8a1b-d4e066ca4337",
        "price": 1571,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Tools",
        "title": "Incredible Cotton Pants",
        "mainMaterial": "Wooden",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    {
        "id": "71050a3d-2c3d-447b-9cd8-041252279a30",
        "price": 1745,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Music",
        "title": "Refined Rubber Fish",
        "mainMaterial": "Granite",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
    },
    {
        "id": "0b38e198-66af-4040-ba56-2bced81005e1",
        "price": 706,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Outdoors",
        "title": "Refined Wooden Shirt",
        "mainMaterial": "Steel",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    {
        "id": "973e390b-e1f2-4976-b26b-2a2fc9f8b3c9",
        "price": 1166,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Music",
        "title": "Unbranded Fresh Cheese",
        "mainMaterial": "Concrete",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit"
    },
    {
        "id": "bb5d5f99-21f5-4f24-b585-6f1c2a156b16",
        "price": 1733,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Garden",
        "title": "Incredible Wooden Car",
        "mainMaterial": "Cotton",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "d1718a1e-e8dd-48bd-898b-ff9290a54a53",
        "price": 1033,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Sports",
        "title": "Gorgeous Granite Pants",
        "mainMaterial": "Plastic",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
    },
    {
        "id": "6a4413c1-f3a4-452b-b22e-4638336f87b4",
        "price": 1368,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Grocery",
        "title": "Intelligent Cotton Sausages",
        "mainMaterial": "Fresh",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit"
    },
    {
        "id": "6478bf1a-c0e5-432b-adf0-fea0992f10b7",
        "price": 488,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Industrial",
        "title": "Awesome Soft Chips",
        "mainMaterial": "Frozen",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "a36216c8-7d18-4549-873e-6f7be1895996",
        "price": 1895,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Electronics",
        "title": "Fantastic Plastic Pants",
        "mainMaterial": "Fresh",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "560febcd-bb18-47b3-b13d-1ea2746ad7e1",
        "price": 1658,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Books",
        "title": "Practical Soft Gloves",
        "mainMaterial": "Rubber",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "8f3b373b-c3f4-4ea4-9fc3-4017a9a6667a",
        "price": 1074,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Electronics",
        "title": "Practical Plastic Towels",
        "mainMaterial": "Rubber",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "ea6d2363-e56a-49b4-930c-986df5a24d9f",
        "price": 663,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Music",
        "title": "Practical Metal Hat",
        "mainMaterial": "Granite",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit"
    },
    {
        "id": "8159ee4b-1341-4bdc-8a59-e58f89724cf7",
        "price": 496,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Automotive",
        "title": "Awesome Concrete Soap",
        "mainMaterial": "Metal",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
    },
    {
        "id": "4c46bb08-0fc9-436d-9b0f-46509688404e",
        "price": 1860,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Shoes",
        "title": "Sleek Steel Cheese",
        "mainMaterial": "Cotton",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "ddfc416e-87d6-4327-92d2-01491905d9f5",
        "price": 1686,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Movies",
        "title": "Intelligent Metal Hat",
        "mainMaterial": "Metal",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    {
        "id": "6c16b41c-81b4-4a96-b9a4-2bffd1e84b56",
        "price": 1313,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Home",
        "title": "Small Cotton Bike",
        "mainMaterial": "Metal",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "59078533-5d9d-422e-beb3-7dc62a331118",
        "price": 1286,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Shoes",
        "title": "Unbranded Concrete Shoes",
        "mainMaterial": "Rubber",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "22c1995b-7047-4306-b221-160005823340",
        "price": 1964,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Handcrafted Frozen Cheese",
        "mainMaterial": "Frozen",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "7b84b949-2702-43cc-9819-ac30e2c3cc82",
        "price": 662,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Baby",
        "title": "Sleek Metal Ball",
        "mainMaterial": "Wooden",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "0be839ba-a773-40f4-9b43-a09bc4985a3d",
        "price": 1289,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Grocery",
        "title": "Fantastic Wooden Soap",
        "mainMaterial": "Steel",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "4a9cb38b-cc92-4f5c-aaff-631202f3a915",
        "price": 1968,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Tools",
        "title": "Fantastic Fresh Salad",
        "mainMaterial": "Soft",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "f965df99-7faf-4db6-8518-c83fbf7ee87b",
        "price": 1729,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Computers",
        "title": "Incredible Wooden Chips",
        "mainMaterial": "Metal",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
    },
    {
        "id": "3a109d21-5784-44b7-b508-9c432dce08ea",
        "price": 891,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Beauty",
        "title": "Licensed Steel Shirt",
        "mainMaterial": "Steel",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
    },
    {
        "id": "9186df14-b125-4de2-85b5-943afee8682c",
        "price": 220,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Baby",
        "title": "Sleek Rubber Pizza",
        "mainMaterial": "Concrete",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    {
        "id": "d206a3db-089f-41ce-b935-be32a77921d6",
        "price": 1007,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Beauty",
        "title": "Intelligent Concrete Car",
        "mainMaterial": "Frozen",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "d917701c-02fe-4c2a-96dc-d82f97c16e3e",
        "price": 318,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Kids",
        "title": "Rustic Plastic Bacon",
        "mainMaterial": "Rubber",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "0b407071-3f5c-4ca1-bcb2-5fa2994a1472",
        "price": 1560,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Clothing",
        "title": "Tasty Metal Keyboard",
        "mainMaterial": "Rubber",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
    },
    {
        "id": "f6bda63c-966a-42d3-8d08-2e6ab855311a",
        "price": 818,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Home",
        "title": "Tasty Wooden Pants",
        "mainMaterial": "Granite",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit"
    },
    {
        "id": "f13a95f9-e7f2-4fe6-9497-d1788a5c7fd1",
        "price": 156,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Industrial",
        "title": "Handcrafted Rubber Table",
        "mainMaterial": "Granite",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "b4e6eb59-ed22-47bc-a25a-29ff021b6228",
        "price": 648,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Handmade Fresh Bike",
        "mainMaterial": "Soft",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "b78cb18e-8531-49af-81eb-d273b149d807",
        "price": 1755,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Tools",
        "title": "Fantastic Rubber Shoes",
        "mainMaterial": "Cotton",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "66e3b270-25c3-4f65-8b2f-02da30d6ce6b",
        "price": 1534,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Toys",
        "title": "Handmade Rubber Sausages",
        "mainMaterial": "Steel",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    {
        "id": "d20efd9e-35c7-4582-aef6-53f29072d46c",
        "price": 564,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Industrial",
        "title": "Incredible Plastic Table",
        "mainMaterial": "Plastic",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "9ac43e92-c6f2-43e4-ad98-0ce5872b1551",
        "price": 328,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Games",
        "title": "Small Frozen Towels",
        "mainMaterial": "Frozen",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    {
        "id": "5cf3cd86-d1c4-49ba-bc0d-6e149746ddb7",
        "price": 83,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Tools",
        "title": "Gorgeous Plastic Cheese",
        "mainMaterial": "Plastic",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "1b78d7ee-3a8f-4d48-b2a5-cce5619bb910",
        "price": 1212,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Garden",
        "title": "Incredible Soft Bike",
        "mainMaterial": "Soft",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "d6dbee09-6139-49ff-bfa6-f698a6a8ca44",
        "price": 494,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Shoes",
        "title": "Practical Plastic Tuna",
        "mainMaterial": "Metal",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "53a837c1-c119-4169-8b65-8e5098260c20",
        "price": 1246,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Jewelery",
        "title": "Intelligent Rubber Tuna",
        "mainMaterial": "Wooden",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
    },
    {
        "id": "40276f98-d21e-438a-af1e-8ce47e3dcc35",
        "price": 1894,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Movies",
        "title": "Unbranded Plastic Pizza",
        "mainMaterial": "Steel",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "231708dc-ff54-4d65-927a-df6d1b89ad0a",
        "price": 1735,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Sports",
        "title": "Incredible Metal Mouse",
        "mainMaterial": "Steel",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "165fa84c-e7df-4780-8430-54aa2c53ac38",
        "price": 215,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Beauty",
        "title": "Incredible Steel Chips",
        "mainMaterial": "Granite",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit"
    },
    {
        "id": "4e4161a1-00e9-42d3-827d-5b56011eb326",
        "price": 1302,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Clothing",
        "title": "Ergonomic Cotton Computer",
        "mainMaterial": "Concrete",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "0c7de976-67cf-40cb-8854-9a68e4f50a4c",
        "price": 584,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Clothing",
        "title": "Sleek Steel Hat",
        "mainMaterial": "Plastic",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
    },
    {
        "id": "0cd0e940-546c-47d7-a678-0c1522c0d54d",
        "price": 880,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Home",
        "title": "Rustic Rubber Chicken",
        "mainMaterial": "Wooden",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
    },
    {
        "id": "79a10970-a392-4a2c-a19a-b872287b2a60",
        "price": 1559,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Automotive",
        "title": "Small Metal Tuna",
        "mainMaterial": "Plastic",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "81f9d81e-63ae-4f1e-8a4f-2f161cb9e476",
        "price": 567,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Sports",
        "title": "Licensed Cotton Soap",
        "mainMaterial": "Frozen",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
    },
    {
        "id": "b8167857-4be9-4dfc-bfc6-ee6c57114ec0",
        "price": 818,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Movies",
        "title": "Refined Plastic Chair",
        "mainMaterial": "Fresh",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "24049827-270c-44a0-884f-1a0603322a61",
        "price": 1783,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Awesome Rubber Car",
        "mainMaterial": "Wooden",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "8cb33999-c445-4c31-ab04-24abd6df9452",
        "price": 1356,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Kids",
        "title": "Intelligent Fresh Shirt",
        "mainMaterial": "Rubber",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "8deb77e3-c319-4906-a9ad-ae1f2007da60",
        "price": 1047,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Toys",
        "title": "Handmade Frozen Salad",
        "mainMaterial": "Rubber",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "eb3a1914-08e9-4b83-b087-8b5d3f76f92a",
        "price": 1527,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Fantastic Wooden Cheese",
        "mainMaterial": "Rubber",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "51f994fe-699c-4a7a-9b2e-836cc3d065e7",
        "price": 140,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Automotive",
        "title": "Ergonomic Fresh Shirt",
        "mainMaterial": "Metal",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "a44a80f9-fa67-47c6-889c-31d5dfa41040",
        "price": 77,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Sleek Steel Salad",
        "mainMaterial": "Cotton",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "0a17df91-4f19-4821-bb47-ac3ad6cbcb54",
        "price": 331,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Grocery",
        "title": "Gorgeous Rubber Cheese",
        "mainMaterial": "Rubber",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
    },
    {
        "id": "b8d35397-826c-4a06-9136-bb62b9a29c1b",
        "price": 294,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Clothing",
        "title": "Small Metal Tuna",
        "mainMaterial": "Soft",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "2393bf13-36e7-4b2d-9bea-271bcd2bcd36",
        "price": 1831,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Outdoors",
        "title": "Fantastic Cotton Towels",
        "mainMaterial": "Steel",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "c7351845-43da-47d3-bfd6-1c0b00877ad8",
        "price": 413,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Kids",
        "title": "Licensed Plastic Soap",
        "mainMaterial": "Granite",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
    },
    {
        "id": "cfa9b1c6-9947-430d-b89f-d25ed25657c5",
        "price": 1093,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Unbranded Granite Computer",
        "mainMaterial": "Steel",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
    },
    {
        "id": "fd30cea3-56a5-4a07-b444-c99612bfdc84",
        "price": 1447,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Jewelery",
        "title": "Fantastic Rubber Ball",
        "mainMaterial": "Fresh",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "38f234fe-2316-496d-bbfe-40fd7020418e",
        "price": 1486,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Music",
        "title": "Fantastic Concrete Tuna",
        "mainMaterial": "Wooden",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "834e0283-c4e0-4ae2-bb26-8194cdfd705d",
        "price": 907,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Movies",
        "title": "Unbranded Granite Soap",
        "mainMaterial": "Concrete",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "7c023c61-2654-43ed-b8a5-84887505214e",
        "price": 422,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Outdoors",
        "title": "Ergonomic Wooden Ball",
        "mainMaterial": "Concrete",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "010a2a47-ca93-46a0-95fa-9b1b98122ca8",
        "price": 31,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Jewelery",
        "title": "Generic Steel Chips",
        "mainMaterial": "Concrete",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "7a4dec64-da6a-4f84-ae45-deabaaf60236",
        "price": 456,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Outdoors",
        "title": "Intelligent Frozen Gloves",
        "mainMaterial": "Plastic",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "2fe3fbdb-4ced-4bfe-9324-678e773012dd",
        "price": 352,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Computers",
        "title": "Small Metal Chips",
        "mainMaterial": "Plastic",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "894d97ed-5cee-42a4-83e5-3fcf21a80012",
        "price": 1815,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Computers",
        "title": "Unbranded Granite Shoes",
        "mainMaterial": "Wooden",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
    },
    {
        "id": "f764fecd-0562-4439-829d-e923abf27aec",
        "price": 1381,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Music",
        "title": "Fantastic Cotton Mouse",
        "mainMaterial": "Metal",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "51b6c899-57aa-4c3b-b48f-c21f9a0f3feb",
        "price": 493,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Health",
        "title": "Handcrafted Concrete Bike",
        "mainMaterial": "Cotton",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
    },
    {
        "id": "c735ed52-afff-46f7-bca0-7a4bb3e2a095",
        "price": 113,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Electronics",
        "title": "Fantastic Wooden Mouse",
        "mainMaterial": "Granite",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
    },
    {
        "id": "92c8e6fa-cd0d-4e8a-857a-a3b1676376d0",
        "price": 898,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Kids",
        "title": "Tasty Steel Cheese",
        "mainMaterial": "Cotton",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
    },
    {
        "id": "49dd70c1-169d-4ea9-a307-9d33afd52fcd",
        "price": 1496,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Toys",
        "title": "Unbranded Steel Bacon",
        "mainMaterial": "Fresh",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"
    },
    {
        "id": "5a91fa82-c358-4639-bb15-7f7b877237b1",
        "price": 903,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Outdoors",
        "title": "Ergonomic Wooden Gloves",
        "mainMaterial": "Plastic",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
    },
    {
        "id": "4eabd9df-d50b-42b3-be62-e9d2523c2554",
        "price": 1125,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Shoes",
        "title": "Fantastic Concrete Shoes",
        "mainMaterial": "Fresh",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    {
        "id": "bbfe5d12-417b-4bfe-8f4e-97787c871b8d",
        "price": 1592,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Computers",
        "title": "Sleek Granite Shoes",
        "mainMaterial": "Wooden",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    },
    {
        "id": "54b1bc17-b46a-4594-be89-14ff02237ba0",
        "price": 1087,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Clothing",
        "title": "Refined Fresh Sausages",
        "mainMaterial": "Wooden",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "24cdb8d1-3bf9-4273-a366-461f184c8771",
        "price": 1102,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Sports",
        "title": "Licensed Concrete Shoes",
        "mainMaterial": "Plastic",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "bd0dacbf-2944-478e-ab10-6fa38ef8de6c",
        "price": 614,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Books",
        "title": "Ergonomic Soft Pizza",
        "mainMaterial": "Fresh",
        "description": "The Football Is Good For Training And Recreational Purposes"
    },
    {
        "id": "0a3595e5-4f21-4254-b671-646f91f4f65b",
        "price": 1660,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Jewelery",
        "title": "Generic Concrete Soap",
        "mainMaterial": "Rubber",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
    },
    {
        "id": "a1357e2f-03e9-4b55-a1f5-bc1105a4b3f5",
        "price": 434,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Computers",
        "title": "Handmade Granite Chips",
        "mainMaterial": "Soft",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
    },
    {
        "id": "967aac8b-b230-4ae6-b525-56b538517716",
        "price": 1403,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Tools",
        "title": "Handcrafted Wooden Keyboard",
        "mainMaterial": "Soft",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
    },
    {
        "id": "418cf70f-0bbd-4a93-bae8-09afe1de524a",
        "price": 1217,
        "imgUrl": "https://source.unsplash.com/1920x1080/?product",
        "department": "Beauty",
        "title": "Incredible Rubber Chair",
        "mainMaterial": "Steel",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
    }
];

export const productService = {
    list,
    getById,
    getPrevNext
};

function list() {
    return Promise.resolve(gProducts.slice());
}

function getById(id) {
    const product = gProducts.find(p => p.id === id);
    return Promise.resolve(product);
}

function getPrevNext(id, diff) {
    const idx = gProducts.findIndex(p => p.id === id);
    return Promise.resolve(gProducts[idx + diff]);
}