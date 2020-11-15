DROP TABLE Ingredient;

CREATE TABLE `Ingredient` (
	`IngredientID` INT NOT NULL AUTO_INCREMENT,
	`IngredientName` VARCHAR(128) NOT NULL,
	`Price` INT NOT NULL,
	PRIMARY KEY (`IngredientID`)
);

# 100
INSERT INTO `Ingredient` (`IngredientID`,`IngredientName`,`Price`) VALUES (1,"Lisinopril",400),(2,"Prednisone",4891),(3,"Meloxicam",5555),(4,"Prednisone2",1093),(5,"Lisinopril2",8172),(6,"Methylprednisolone",1299),(7,"Ventolin HFA",5502),(8,"Lyrica",9835),(9,"Metoprolol Succinate",4045),(10,"Hydrocodone/APAP",8149),(11,"Niaspan",1631),(12,"Pravastatin Sodium",9663),(13,"Simvastatin",8051),(14,"Levaquin",2052),(15,"Metoprolol Succinate2",4435),(16,"Nasonex",6606),(17,"Enalapril Maleate",5981),(18,"Levothyroxine Sodium",3964),(19,"Citalopram HBR",8233),(20,"Alprazolam",5542);
INSERT INTO `Ingredient` (`IngredientID`,`IngredientName`,`Price`) VALUES (21,"Zetia",2771),(22,"Simvastatin2",3843),(23,"Fluticasone Propionate",612),(24,"Losartan Potassium",6531),(25,"LevothyroxineSodium",1028),(26,"Ciprofloxacin HCl",6102),(27,"Clonazepam",6628),(28,"Potassium Chloride",9966),(29,"Zyprexa",2663),(30,"Gianvi",6233),(31,"Hydrochlorothiazide",7036),(32,"Lovastatin",9081),(33,"Hydrocodone/APAP2",4675),(34,"Glipizide",4314),(35,"Amoxicillin",8911),(36,"Warfarin Sodium",1778),(37,"Amlodipine Besylate",4589),(38,"Bystolic",4341),(39,"Lantus Solostar",1849),(40,"Diazepam",7093);
INSERT INTO `Ingredient` (`IngredientID`,`IngredientName`,`Price`) VALUES (41,"Ibuprofen (Rx)",5595),(42,"Lisinopril3",7523),(43,"Lorazepam",6178),(44,"Hydrocodone/APAP3",8845),(45,"Simvastatin3",2303),(46,"Premarin",3448),(47,"Amitriptyline HCl",8296),(48,"Fluticasone Propionate2",946),(49,"Lantus Solostar2",3549),(50,"Prednisone3",4810),(51,"Hydrochlorothiazide2",9332),(52,"Alprazolam2",8145),(53,"Simvastatin4",6673),(54,"Lorazepam2",3565),(55,"Metoprolol Succinate3",6897),(56,"Fluticasone Propionate3",7891),(57,"Atenolol",6629),(58,"Albuterol",9881),(59,"Cyclobenzaprin HCl",5514),(60,"Premarin2",795);
INSERT INTO `Ingredient` (`IngredientID`,`IngredientName`,`Price`) VALUES (61,"Alprazolam3",1129),(62,"Tramadol HCl",6273),(63,"Azithromycin",3587),(64,"Ciprofloxacin HCl2",141),(65,"Lorazepam3",5191),(66,"Lovastatin2",425),(67,"Plavix",1204),(68,"Prednisone4",9824),(69,"Prednisone5",1798),(70,"LevothyroxineSodium2",3725),(71,"Prednisone6",2831),(72,"Furosemide",7115),(73,"Pantoprazole Sodium",7088),(74,"Hydrocodone/APAP4",7511),(75,"Sertraline HCl",8574),(76,"Metoprolol Tartrate",4904),(77,"Albuterol2",8513),(78,"Prednisone7",1686),(79,"Levoxyl",9600),(80,"Hydrochlorothiazide3",7805);
INSERT INTO `Ingredient` (`IngredientID`,`IngredientName`,`Price`) VALUES (81,"Simvastatin5",7802),(82,"Amphetamine Salts",164),(83,"Omeprazole (Rx)",2248),(84,"Atenolol2",6858),(85,"Fluticasone Propionate4",1446),(86,"Ibuprofen (Rx)2",203),(87,"Fluoxetine HCl",8560),(88,"Triamterene/Hydrochlorothiazide4",3017),(89,"Lisinopril4",5633),(90,"Hydrocodone/APAP5",7907),(91,"Celebrex",969),(92,"Hydrocodone/APAP6",8945),(93,"Sertraline HCl2",8714),(94,"Sertraline HCl3",2220),(95,"Atenolol3",3862),(96,"Cephalexin",4591),(97,"Gianvi2",4179),(98,"Paroxetine HCl",6065),(99,"Advair Diskus",4548),(100,"Zolpidem Tartrate",4385);
