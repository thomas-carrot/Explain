// studio.config.ts
import homeSchema from './studio/schemas/home'

export default {
    // Configuration générale
    projectName: 'Nümorning - Explana',

    // Mapping des fichiers vers leurs schémas
    documents: [
        {
            // Page d'accueil
            name: 'home',
            title: 'Page d\'accueil',
            file: 'content/pages/index.md',
            schema: homeSchema
        }
        // Ici vous pourrez ajouter d'autres pages plus tard :
        // {
        //   name: 'contact',
        //   title: 'Page Contact',
        //   file: 'content/pages/contact.md',
        //   schema: contactSchema
        // }
    ],

    // Configuration des assets
    media: {
        // Dossier pour les images uploadées
        folder: 'public/uploads',
        // URL publique des assets
        publicUrl: '/uploads'
    }
}