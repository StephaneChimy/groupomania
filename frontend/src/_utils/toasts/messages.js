import { toast } from 'react-toastify';


const toastMessagePosted = () => toast.success("Message publié !");
const toastMessageDeleted = () => toast.success("Message Supprimé !");


export { toastMessagePosted, toastMessageDeleted }