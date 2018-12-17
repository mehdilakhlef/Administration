import { PromotionElement } from './model/promotion-element';
import { DemandeElement } from './model/demande-element';
import { AlternantElement } from './model/alternant-element';

export const PROMOTIONS: PromotionElement[] = [
    {classe:'M1 MIAGE', annee: '2018/2019'},
    {classe:'M2 MIAGE', annee: '2018/2019'}
];

export const DEMANDES: DemandeElement[] = [
    {INE: '0123445525D', nom: 'RAMADOUR', prenom: 'Philippe', classe:'L3I', dateDemande: '09/12/2018'},
    {INE: '0206009038T', nom: 'LAKHLEF', prenom: 'Mehdi', classe:'L3G',   dateDemande: '11/12/2018'},
    {INE: '3679460163T', nom: 'DETEMMERMAN', prenom: 'Sarah', classe:'L3G', dateDemande: '10/12/2018'},
    {INE: '0372584097G', nom: 'ZABARTE', prenom: 'Geoffrey', classe:'L3G', dateDemande: '02/12/2018'},
    {INE: '2630956821S', nom: 'CARRUGGI', prenom: 'Hugo', classe:'L3G', dateDemande: '03/12/2018'},
    {INE: '8957306738A', nom: 'CHABERT', prenom: 'Antoine', classe:'L3G', dateDemande: '07/12/2018'},
    {INE: '1052385684H', nom: 'ROSPARS', prenom: 'Sébastien', classe:'L3I', dateDemande: '04/12/2018'}
];

export const ALTERNANTS_M1: AlternantElement[] = [
    {INE: '0123445525D', nom: 'COZZUCOLI', prenom: 'Antoine', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Capgemini'},
    {INE: '0206009038T', nom: 'LAKHLEF', prenom: 'Mehdi', numSS: '1950813001322 55', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Sopra Steria'},
    {INE: '3679460163T', nom: 'DETEMMERMAN', prenom: 'Sarah', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Airbus Helicopters'},
    {INE: '0372584097G', nom: 'ZABARTE', prenom: 'Geoffrey', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Sopra Steria'},
    {INE: '2630956821S', nom: 'CARRUGGI', prenom: 'Hugo', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Airbus Helicopters'},
    {INE: '8957306738A', nom: 'CHABERT', prenom: 'Antoine', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Micropôle'},
    {INE: '1052385684H', nom: 'ROSPARS', prenom: 'Sébastien', numSS: '', parcours: 'L3I', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Linxo'},
    {INE: '3530372097H', nom: 'GENTINA', prenom: 'Thomas', numSS: '', parcours: 'L3I', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Keyrus'},
    {INE: '3583073528K', nom: 'MEDORI', prenom: 'Théo', numSS: '', parcours: 'L3I', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Sopra Steria'},
    {INE: '2420967182M', nom: 'CHOURAKI', prenom: 'Hugo', numSS: '', parcours: 'L3I', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Sopra Steria'},
    {INE: '2972571096I', nom: 'ENTEZAM', prenom: 'Samuel', numSS: '', parcours: 'L3I', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Sopra Steria'},
    {INE: '2529763598P', nom: 'MARCHOIS', prenom: 'Miléna', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Airbus Helicopters'},
    {INE: '1342654879A', nom: 'CONTRERAS', prenom: 'Léanna', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Sopra Steria'},
    {INE: '2068363872S', nom: 'GIAIME', prenom: 'Benjamin', numSS: '', parcours: 'L3G', promotion: 'M1 MIAGE 2018/2019', entreprise: 'Airbus Helicopters'}
];

export const ALTERNANTS_M2: AlternantElement[] = [
    {INE: '286930376Y', nom: 'NAVARRO', prenom: 'Tom', numSS: '', parcours: 'L3I', promotion: 'M2 MIAGE 2018/2019', entreprise: 'Crédit Agricole'},
    {INE: '2620394761U', nom: 'GOUTY', prenom: 'Thomas', numSS: '', parcours: 'L3G', promotion: 'M2 MIAGE 2018/2019', entreprise: 'Capgemini'},
    {INE: '1096383722M', nom: 'NICAISE', prenom: 'Nicolas', numSS: '', parcours: 'L3G', promotion: 'M2 MIAGE 2018/2019', entreprise: 'Sopra Steria'},
    {INE: '2092673872Q', nom: 'POURCHOT', prenom: 'Mathieu', numSS: '', parcours: 'L3I', promotion: 'M2 MIAGE 2018/2019', entreprise: 'Airbus Helicopters'}
];