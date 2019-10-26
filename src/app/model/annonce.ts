import { Produit } from './produit';
export class Annonce{
    public id: number;
    public libelle: string;
    public prix_unitaire: number;
    public quantite: number;
    public etat: Boolean;
    public produit_id: number;
    public user_id: number;
    public unite: string;
    public produit: Produit;
    public create_at: string;



}