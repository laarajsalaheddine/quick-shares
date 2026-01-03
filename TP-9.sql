-- 1. Création de la base de données et sélection
CREATE DATABASE IF NOT EXISTS bank_demo;
USE bank_demo;

-- pour afficher un message
select 'Data base created and selected' AS 'Message';

-- 2. Création de la table accounts
CREATE TABLE accounts (
  id_compte INT AUTO_INCREMENT PRIMARY KEY,
  nom_client VARCHAR(100) NOT NULL,
  solde DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  date_ouverture DATE NOT NULL,
  status VARCHAR(10) NOT NULL COMMENT 'Active ou Inactive'
);

-- pour afficher un message
select 'Table accounts created' AS 'Message';

-- 3. Création de la table transactions
CREATE TABLE transactions (
  id_transaction INT AUTO_INCREMENT PRIMARY KEY,
  id_compte INT NOT NULL,
  montant DECIMAL(10,2) NOT NULL COMMENT '>0 dépôt, <0 retrait',
  date_transaction DATE NOT NULL,
  FOREIGN KEY (id_compte) REFERENCES accounts(id_compte)
);

-- pour afficher un message
select 'Table transactions created' AS 'Message';


-- pour afficher un message
select 'Insreting data' AS 'Message';

-- 4. Insertion de quelques comptes
INSERT INTO accounts (nom_client, solde, date_ouverture, status) VALUES
('Alice Dupont', 1500.00, '2024-05-10', 'Active'),
('Bruno Martin', -200.50, '2023-11-22', 'Active'),
('Carla Lopez',  0.00,   '2025-02-01', 'Inactive'),
('David Nguyen', 8000.75, '2022-07-15', 'Active'),
('Elena Rossi',  320.00,  '2024-12-05', 'Active');

-- 5. Insertion de quelques transactions
INSERT INTO transactions (id_compte, montant, date_transaction) VALUES
(1,  500.00,  '2025-01-12'),  -- dépôt
(1, -150.00,  '2025-03-03'),  -- retrait
(2, -50.00,   '2024-12-20'),  -- retrait
(2, -150.50,  '2025-02-14'),  -- retrait
(4,  200.00,  '2025-06-01'),  -- dépôt
(4, -100.25,  '2025-06-15'),  -- retrait
(5,  120.00,  '2025-04-30'),  -- dépôt
(5,  200.00,  '2025-05-10');  -- dépôt
