// studio/schemas/home.ts
export default {
    name: 'home',
    title: 'Page d\'accueil',
    type: 'document',
    fields: [
        // === INFORMATIONS GÉNÉRALES ===
        {
            name: 'title',
            title: 'Titre de la page',
            type: 'string',
            description: 'Le titre principal de la page (SEO)',
            group: 'general'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description pour le référencement',
            group: 'general'
        },
        {
            name: 'layout',
            title: 'Layout',
            type: 'string',
            options: {
                list: ['default', 'minimal']
            },
            initialValue: 'default',
            group: 'general'
        },

        // === SECTION HERO ===
        {
            name: 'hero',
            title: 'Section Hero',
            type: 'object',
            group: 'hero',
            fields: [
                {
                    name: 'title',
                    title: 'Titre principal',
                    type: 'string',
                    description: 'Le gros titre affiché en haut de la page'
                },
                {
                    name: 'subtitle',
                    title: 'Sous-titre',
                    type: 'text',
                    description: 'Le texte sous le titre principal'
                },
                {
                    name: 'cta_text',
                    title: 'Texte du bouton',
                    type: 'string',
                    description: 'Le texte affiché sur le bouton'
                },
                {
                    name: 'cta_link',
                    title: 'Lien du bouton',
                    type: 'string',
                    description: 'Vers où le bouton redirige (ex: /doc)'
                },
                {
                    name: 'image',
                    title: 'Image de fond',
                    type: 'image',
                    description: 'L\'image de fond de la section hero'
                }
            ]
        },

        // === SECTION MISSION ===
        {
            name: 'mission',
            title: 'Section Mission',
            type: 'object',
            group: 'mission',
            fields: [
                {
                    name: 'info',
                    title: 'Texte d\'information',
                    type: 'string',
                    description: 'Le petit texte orange au-dessus du titre'
                },
                {
                    name: 'title',
                    title: 'Titre de la mission',
                    type: 'string',
                    description: 'Le gros titre de cette section'
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    description: 'Le paragraphe expliquant votre mission'
                },
                {
                    name: 'cta_text',
                    title: 'Texte du bouton',
                    type: 'string',
                    description: 'Le texte du bouton de cette section'
                },
                {
                    name: 'cta_link',
                    title: 'Lien du bouton',
                    type: 'string',
                    description: 'Vers où ce bouton redirige'
                },
                {
                    name: 'imageFirst',
                    title: 'Première image',
                    type: 'image',
                    description: 'Image 1 de la galerie'
                },
                {
                    name: 'imageSecond',
                    title: 'Deuxième image',
                    type: 'image',
                    description: 'Image 2 de la galerie'
                },
                {
                    name: 'imageThird',
                    title: 'Troisième image',
                    type: 'image',
                    description: 'Image 3 de la galerie'
                },
                {
                    name: 'imageFour',
                    title: 'Quatrième image',
                    type: 'image',
                    description: 'Image 4 de la galerie'
                },
                {
                    name: 'imageFive',
                    title: 'Cinquième image',
                    type: 'image',
                    description: 'Image 5 de la galerie'
                }
            ]
        },

        // === SECTION FONCTIONNALITÉS ===
        {
            name: 'feature',
            title: 'Section Fonctionnalités',
            type: 'object',
            group: 'features',
            fields: [
                {
                    name: 'info',
                    title: 'Texte d\'information',
                    type: 'string',
                    description: 'Le petit texte orange au-dessus du titre'
                },
                {
                    name: 'title',
                    title: 'Titre',
                    type: 'string',
                    description: 'Le titre principal de cette section'
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    description: 'Le paragraphe de description'
                },
                {
                    name: 'video',
                    title: 'Vidéo',
                    type: 'file',
                    description: 'La vidéo à afficher (format .mp4 recommandé)',
                    options: {
                        accept: 'video/*'
                    }
                }
            ]
        }
    ],

    // Groupes pour organiser l'interface
    fieldsets: [
        {
            name: 'general',
            title: '📄 Informations générales',
            options: {
                collapsible: true,
                collapsed: false
            }
        },
        {
            name: 'hero',
            title: '🎯 Section Hero',
            options: {
                collapsible: true,
                collapsed: false
            }
        },
        {
            name: 'mission',
            title: '🎯 Section Mission',
            options: {
                collapsible: true,
                collapsed: true
            }
        },
        {
            name: 'features',
            title: '⭐ Section Fonctionnalités',
            options: {
                collapsible: true,
                collapsed: true
            }
        }
    ]
}