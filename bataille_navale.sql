-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 10 Juillet 2015 à 16:18
-- Version du serveur :  10.0.20-MariaDB-log
-- Version de PHP :  5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bataille_navale`
--

-- --------------------------------------------------------

--
-- Structure de la table `bataille`
--

CREATE TABLE IF NOT EXISTS `bataille` (
  `id_bataille` int(11) NOT NULL,
  `nom_partie` text NOT NULL,
  `id_joueur_1` int(11) NOT NULL,
  `id_joueur_2` int(11) NOT NULL,
  `id_grille_joueur_1` int(11) NOT NULL,
  `id_grille_joueur_2` int(11) NOT NULL,
  `jouant` int(11) NOT NULL DEFAULT '1' COMMENT 'précise le joueur qui a la main:(1=>joueur1),(2=>joueur2)'
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `bataille`
--

INSERT INTO `bataille` (`id_bataille`, `nom_partie`, `id_joueur_1`, `id_joueur_2`, `id_grille_joueur_1`, `id_grille_joueur_2`, `jouant`) VALUES
(1, 'j1 vs. j2', 1, 2, 1, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `grille`
--

CREATE TABLE IF NOT EXISTS `grille` (
  `id_grille` int(11) NOT NULL,
  `hauteur` tinyint(4) NOT NULL,
  `largeur` tinyint(4) NOT NULL,
  `nb_bateaux` tinyint(4) NOT NULL,
  `positions_bateaux` text NOT NULL COMMENT 'positions sous la forme:{{a,b}{c,d}}{{e,f}{g,h}}'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `grille`
--

INSERT INTO `grille` (`id_grille`, `hauteur`, `largeur`, `nb_bateaux`, `positions_bateaux`) VALUES
(1, 4, 4, 2, '{{0,0},{0,1}}{{2,2},{3,2}}'),
(2, 4, 4, 2, '{{3,0},{3,1}}{{0,0},{1,0}}');

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

CREATE TABLE IF NOT EXISTS `joueur` (
  `id_joueur` int(11) NOT NULL,
  `nom_joueur` varchar(255) NOT NULL,
  `email_joueur` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `joueur`
--

INSERT INTO `joueur` (`id_joueur`, `nom_joueur`, `email_joueur`) VALUES
(1, 'j1', 'j1@j1.j1'),
(2, 'j2', 'j2@j2.j2');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `bataille`
--
ALTER TABLE `bataille`
  ADD PRIMARY KEY (`id_bataille`),
  ADD KEY `id_joueur_1` (`id_joueur_1`),
  ADD KEY `id_joueur_2` (`id_joueur_2`),
  ADD KEY `id_grille_joueur_1` (`id_grille_joueur_1`),
  ADD KEY `id_grille_joueur_2` (`id_grille_joueur_2`);

--
-- Index pour la table `grille`
--
ALTER TABLE `grille`
  ADD PRIMARY KEY (`id_grille`);

--
-- Index pour la table `joueur`
--
ALTER TABLE `joueur`
  ADD PRIMARY KEY (`id_joueur`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `bataille`
--
ALTER TABLE `bataille`
  MODIFY `id_bataille` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `grille`
--
ALTER TABLE `grille`
  MODIFY `id_grille` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `joueur`
--
ALTER TABLE `joueur`
  MODIFY `id_joueur` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `bataille`
--
ALTER TABLE `bataille`
  ADD CONSTRAINT `bataille_ibfk_1` FOREIGN KEY (`id_joueur_1`) REFERENCES `joueur` (`id_joueur`),
  ADD CONSTRAINT `bataille_ibfk_2` FOREIGN KEY (`id_joueur_2`) REFERENCES `joueur` (`id_joueur`),
  ADD CONSTRAINT `bataille_ibfk_3` FOREIGN KEY (`id_grille_joueur_1`) REFERENCES `grille` (`id_grille`),
  ADD CONSTRAINT `bataille_ibfk_4` FOREIGN KEY (`id_grille_joueur_2`) REFERENCES `grille` (`id_grille`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
