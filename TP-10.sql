CREATE DATABASE db_tp10;
USE db_tp10;


-- 1. Table des clients
CREATE TABLE  IF NOT EXISTS clients (
    id                   INT           NOT NULL AUTO_INCREMENT,
    nom                  VARCHAR(100)  NOT NULL,
    email                VARCHAR(255)  NOT NULL UNIQUE,
    telephone            VARCHAR(20)   NULL,
    adresse              VARCHAR(255)  NULL,
    zone_geographique    VARCHAR(50)   NULL,
    PRIMARY KEY (id)
);

-- 2. Table des produits
CREATE TABLE  IF NOT EXISTS produits (
    id                   INT            NOT NULL AUTO_INCREMENT,
    nom                  VARCHAR(150)   NOT NULL,
    reference            VARCHAR(50)    NOT NULL UNIQUE,
    description          TEXT           NULL,
    prix_unitaire        DECIMAL(10,2)  NOT NULL,
    stock                INT            NOT NULL DEFAULT 0,
    categorie            VARCHAR(50)    NULL,
    PRIMARY KEY (id)
);

-- 3. Table des demandes de devis
CREATE TABLE IF NOT EXISTS demandes_devis (
    id                    INT             NOT NULL AUTO_INCREMENT,
    client_id             INT             NOT NULL,
    date_demande          DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    surface               DECIMAL(8,2)    NOT NULL,
    type_logement         VARCHAR(50)     NOT NULL,
    usage_type            VARCHAR(50)     NOT NULL,
    include_variateur     TINYINT(1)      NOT NULL DEFAULT 0,
    consommation_predite  DECIMAL(10,2)   NULL,
    PRIMARY KEY (id),
    INDEX idx_dd_client    (client_id),
    CONSTRAINT fk_dd_client
        FOREIGN KEY (client_id)
        REFERENCES clients(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- 4. Table des lignes de devis
CREATE TABLE IF NOT EXISTS lignes_devis (
    id             INT            NOT NULL AUTO_INCREMENT,
    devis_id       INT            NOT NULL,
    produit_id     INT            NOT NULL,
    quantite       INT            NOT NULL DEFAULT 1,
    prix_unitaire  DECIMAL(10,2)  NOT NULL,
    total_ligne    DECIMAL(12,2)  AS (quantite * prix_unitaire) STORED,
    PRIMARY KEY (id),
    INDEX idx_ld_devis   (devis_id),
    INDEX idx_ld_produit (produit_id),
    CONSTRAINT fk_ld_devis
        FOREIGN KEY (devis_id)
        REFERENCES demandes_devis(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_ld_produit
        FOREIGN KEY (produit_id)
        REFERENCES produits(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);



-- 1. Clients (20 enregistrements)
INSERT INTO clients (nom, email, telephone, adresse, zone_geographique) VALUES
('Dupont SARL','dupont.sarl@example.com','0600000001','123 rue de la Paix, Casablanca','Casablanca-Settat'),
('Martin & Fils','martin.fils@example.com','0600000002','45 avenue des Fleurs, Rabat','Rabat-Salé-Kénitra'),
('TechSolutions','contact@techsolutions.ma','0600000003','10 boulevard Mohammed V, Marrakech','Marrakech-Safi'),
('Green Energy','info@greenenergy.ma','0600000004','5 rue des Jardins, Fès','Fès-Meknès'),
('BTP Maroc','btp.maroc@example.com','0600000005','22 route d Agadir, Agadir','Souss-Massa'),
('ImmoPlus','support@immoplus.ma','0600000006','8 place du Commerce, Tanger','Tanger-Tétouan-Al Hoceïma'),
('AgriService','contact@agriservice.ma','0600000007','90 route de Rabat, Meknès','Fès-Meknès'),
('AutoPro','service@autopro.ma','0600000008','15 rue de l Industrie, Oujda','Oriental'),
('SolarTech','sales@solartech.ma','0600000009','30 avenue Hassan II, Béni Mellal','Béni Mellal-Khénifra'),
('FoodMarket','contact@foodmarket.ma','0600000010','110 rue des Oliviers, Safi','Marrakech-Safi'),
('ElecDistrib','elec@distrib.ma','0600000011','7 rue du Marché, Kénitra','Rabat-Salé-Kénitra'),
('MediCare','info@medicare.ma','0600000012','200 avenue des Hôpitaux, Casablanca','Casablanca-Settat'),
('FashionHub','contact@fashionhub.ma','0600000013','50 rue du Centre, Rabat','Rabat-Salé-Kénitra'),
('EduPlus','service@eduplus.ma','0600000014','25 rue des Écoles, Fès','Fès-Meknès'),
('LogiTrans','contact@logitrans.ma','0600000015','18 route de Tanger, Marrakech','Marrakech-Safi'),
('BuildIt','info@buildit.ma','0600000016','3 rue des Artisans, Agadir','Souss-Massa'),
('NetSecure','support@netsecure.ma','0600000017','77 boulevard de la Sécurité, Tanger','Tanger-Tétouan-Al Hoceïma'),
('CleanWater','contact@cleanwater.ma','0600000018','9 rue de l Eau, Meknès','Fès-Meknès'),
('SmartHome','info@smarthome.ma','0600000019','12 avenue de la Technologie, Oujda','Oriental'),
('TravelFun','reservations@travelfun.ma','0600000020','60 rue des Voyages, Safi','Marrakech-Safi')
;

-- 2. Produits (20 enregistrements)
INSERT INTO produits (nom, reference, description, prix_unitaire, stock, categorie) VALUES
('Panneau solaire 300W','PS300','Panneau photovoltaïque 300W monocristallin',320.00,50,'Énergie solaire'),
('Panneau solaire 400W','PS400','Panneau photovoltaïque 400W monocristallin',410.00,40,'Énergie solaire'),
('Contrôleur MPPT 30A','MPPT30','Régulateur de charge MPPT 30A',150.00,25,'Électronique'),
('Batterie Plomb 200Ah','BAT200','Batterie plomb-acide 12V 200Ah',2200.00,15,'Stockage'),
('Inverter 5kW','INV5000','Onduleur 5kW 48V hybride',1800.00,10,'Électronique'),
('Câble solaire 4mm²','CAB4','Câble PV 4mm² noir UV résistant',1.20,500,'Accessoires'),
('Câble solaire 6mm²','CAB6','Câble PV 6mm² noir UV résistant',1.50,400,'Accessoires'),
('Support toît panneau','SUPP1','Support inclinable pour toit',35.00,100,'Structure'),
('Support sol panneau','SUPP2','Support fixe pour sol',45.00,80,'Structure'),
('Variateur de fréquence','VARI1','Variateur 2,2kW pour pompe',250.00,20,'Électronique'),
('Pompe immergée 1HP','POMP1','Pompe eau immergée 1HP 220V',180.00,30,'Hydraulique'),
('Éolienne 1kW','EOL1','Mini-éolienne 1kW résidentielle',1200.00,5,'Énergie éolienne'),
('Régulateur de tension','REG1','Protections surtensions 10kA',30.00,60,'Sécurité'),
('Onduleur secouru','UPS1','UPS 2kVA 48V',600.00,12,'Électronique'),
('Coffret DC','CFTDC','Coffret de protection DC IP65',75.00,40,'Électronique'),
('Coffret AC','CFTAC','Coffret de protection AC IP65',80.00,35,'Électronique'),
('Capteur de température','CAPT1','Capteur NTC pour batterie',10.00,150,'Sonde'),
('Capteur de courant','CAPC1','Capteur Hall 50A',15.00,120,'Sonde'),
('Module communication','MOD1','Module RS485 pour onduleur',95.00,18,'Communication'),
('Chargeur 10A','CHR10','Chargeur batterie 48V 10A',140.00,22,'Électronique')
;

-- 3. Demandes_devis (20 enregistrements)
INSERT INTO demandes_devis (client_id, date_demande, surface, type_logement, usage_type, include_variateur, consommation_predite) VALUES
(1,'2025-06-01 09:15:00',85.50,'Appartement','Résidentiel',0,310.00),
(2,'2025-06-02 11:30:00',120.00,'Villa','Résidentiel',1,450.00),
(3,'2025-06-03 14:45:00',60.00,'Appartement','Commercial',0,200.00),
(4,'2025-06-04 08:20:00',200.75,'Villa','Commercial',1,610.00),
(5,'2025-06-05 10:05:00',95.00,'Maison de ville','Résidentiel',0,340.00),
(6,'2025-06-06 16:10:00',150.25,'Villa','Résidentiel',1,520.00),
(7,'2025-06-07 13:55:00',70.00,'Appartement','Résidentiel',0,250.00),
(8,'2025-06-08 17:40:00',110.50,'Maison de ville','Commercial',1,480.00),
(9,'2025-06-09 09:00:00',130.00,'Villa','Résidentiel',0,490.00),
(10,'2025-06-10 12:25:00',55.25,'Appartement','Commercial',0,220.00),
(11,'2025-06-11 15:35:00',180.00,'Villa','Commercial',1,600.00),
(12,'2025-06-12 11:15:00',88.80,'Appartement','Résidentiel',0,330.00),
(13,'2025-06-13 14:05:00',102.40,'Maison de ville','Résidentiel',1,410.00),
(14,'2025-06-14 16:50:00',75.00,'Appartement','Commercial',0,260.00),
(15,'2025-06-15 10:20:00',140.00,'Villa','Résidentiel',1,550.00),
(16,'2025-06-16 13:10:00',65.75,'Appartement','Résidentiel',0,240.00),
(17,'2025-06-17 09:45:00',115.00,'Maison de ville','Commercial',1,470.00),
(18,'2025-06-18 11:55:00',95.30,'Appartement','Résidentiel',0,335.00),
(19,'2025-06-19 15:00:00',155.50,'Villa','Commercial',1,580.00),
(20,'2025-06-20 14:30:00',82.20,'Appartement','Résidentiel',0,315.00)
;

-- 4. Lignes_devis (20 enregistrements)
INSERT INTO lignes_devis (devis_id, produit_id, quantite, prix_unitaire) VALUES
(1,  1,  2, 320.00),
(2,  4,  1, 2200.00),
(3,  3,  3, 150.00),
(4,  5,  1, 1800.00),
(5,  2,  2, 410.00),
(6,  6, 10,   1.20),
(7,  7,  5,   1.50),
(8,  8,  4,  35.00),
(9,  9,  2,  45.00),
(10, 10, 1,  250.00),
(11, 11, 3,  180.00),
(12, 12, 1, 1200.00),
(13, 13, 2,   30.00),
(14, 14, 1,  600.00),
(15, 15, 2,   75.00),
(16, 16, 3,   80.00),
(17, 17, 2,   10.00),
(18, 18, 4,   15.00),
(19, 19, 1,   95.00),
(20, 20, 2,  140.00)
;