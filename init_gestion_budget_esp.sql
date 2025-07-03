DROP DATABASE IF EXISTS gestion_budget_esp;
-- Création de la base de données
CREATE DATABASE gestion_budget_esp;
GRANT ALL PRIVILEGES ON gestion_budget_esp.* TO 'niass'@'localhost';
USE gestion_budget_esp;

-- Table des utilisateurs
CREATE TABLE utilisateur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(50) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    motDePasse VARCHAR(255)
);
-- Table des départements
CREATE TABLE departement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

-- Table des besoins
CREATE TABLE besoin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(100) NOT NULL,
    description TEXT,
    cout DECIMAL(10,2),
    statut ENUM('VALIDE', 'EN_ATTENTE', 'REJETTE') DEFAULT 'EN_ATTENTE',
    dateSoumission DATETIME NOT NULL,
    dateModification DATETIME NOT NULL,
    categorie VARCHAR(255) NOT NULL
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

-- Table des validations
CREATE TABLE validation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    besoin_id INT,
    source VARCHAR(100),
    statut ENUM('VALIDE', 'EN_ATTENTE', 'REJETTE'),
    commentaire TEXT,
    FOREIGN KEY (besoin_id) REFERENCES besoin(id)
);

-- Table de liaison utilisateur <-> département (1 utilisateur dirige 1 département)
CREATE TABLE chef_departement (
    utilisateur_id INT PRIMARY KEY,
    departement_id INT NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id),
    FOREIGN KEY (departement_id) REFERENCES departement(id)
);
CREATE TABLE enseignant (
    utilisateur_id INT PRIMARY KEY,
    departement_id INT NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id),
    FOREIGN KEY (departement_id) REFERENCES departement(id)
);
CREATE TABLE agent (
    utilisateur_id INT PRIMARY KEY,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);
CREATE TABLE directeur (
    utilisateur_id INT PRIMARY KEY,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

-- Insertion de données factices
INSERT INTO utilisateur (prenom, nom, email, motDePasse) VALUES
('Alioune', 'Diop', 'adiop@esp.sn', 'hashedpass1'),
('Mame', 'Faye', 'mfaye@esp.sn', 'hashedpass2'),
('Fatou', 'Sarr', 'fsarr@esp.sn', 'hashedpass3'),
('Ibrahima', 'Ndiaye', 'ind@esp.sn', 'hashedpass4');

INSERT INTO departement (nom) VALUES
('Informatique'),
('Génie Civil');

INSERT INTO chef_departement (utilisateur_id, departement_id) VALUES
(3, 1); -- Fatou Sarr est chef du département Informatique

INSERT INTO besoin (titre, description, cout, statut, dateSoumission, dateModification, utilisateur_id) VALUES
('Achat projecteur', 'Besoin pour les cours en amphi', 250000, 'EN_ATTENTE', NOW(), NOW(), 1),
('Maintenance réseau', 'Intervention urgente', 150000, 'EN_ATTENTE', NOW(), NOW(), 2),
('Licence logiciel', 'Abonnement annuel', 300000, 'VALIDE', NOW(), NOW(), 3),
('Achat mobilier', 'Tables et chaises pour salle 203', 500000, 'REJETTE', NOW(), NOW(), 1);

INSERT INTO validation (besoin_id, source, statut, commentaire) VALUES
(1, 'Chef de département', 'EN_ATTENTE', 'En cours d’analyse'),
(3, 'Direction', 'VALIDE', 'Prioritaire pour l’année en cours'),
(4, 'Chef de département', 'REJETTE', 'Budget insuffisant');
