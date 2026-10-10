const Nom_du_client = "Awa";
const Nom_du_produit = "Ordinateur";
let Prix_unitaire = 250000;
let Quantité = 2;
let Frais_de_livraison = 5000;
let Taux_de_TVA = 18;

let montant_produits = prix_unitaire * quantite;
let montant_tva = (montant_produits * taux_tva) / 100;
let montant_ttc = montant_produits + montant_tva;
let total_a_payer = montant_ttc + frais_livraison;
let prix_moyen_ttc = montant_ttc / quantite;
