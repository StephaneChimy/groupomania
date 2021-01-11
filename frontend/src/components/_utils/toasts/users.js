import { toast } from "react-toastify";

const userDeleted = () => toast.success("Utilisateur supprimé !");
const userConnected = () => toast.info("Connecté(e) !");
const userLogout = () => toast.info("Déconnecté(e) !");
const userRegistered = () => toast.success("Vous êtes bien enregistré, vous pouvez vous connecter.");
const userModified = () => toast.success("Vos informations ont bien été sauvegardées.");

export { userDeleted, userConnected, userRegistered, userModified, userLogout };
