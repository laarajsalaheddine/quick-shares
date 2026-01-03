-- Création de la base de données et sélection
CREATE DATABASE tp_operateur_like;
USE tp_operateur_like;

-- Création de la table Clients
CREATE TABLE Clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  ville VARCHAR(50) NOT NULL
);

-- Insertion de données mock pour Clients
INSERT INTO Clients (nom, email, ville) VALUES
('Leblanc', 'pierre.leblanc@leblanc.com', 'Bourg-en-Bresse'),
('Martin', 'martin@martin.org', 'Lyon'),
('Dupont', 'dupont%test@french-site.com', 'Bourgoin'),
('Sa', 'a.sa@sacOfPotato.com', 'Paris'),
('Anou', 'anou@whatareyouonabout.com', 'Nice');

-- Création de la table Produits
CREATE TABLE Produits (
  code VARCHAR(10) PRIMARY KEY,
  designation VARCHAR(100) NOT NULL
);

-- Insertion de données mock pour Produits
INSERT INTO Produits (code, designation) VALUES
('P001', 'ProduitAxx'),
('P002', 'PQR'),
('X123', 'MixZ'),
('P003', 'Produitancien'),
('P004', 'PabZ');