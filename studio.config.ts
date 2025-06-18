// studio.config.ts
export default {
    collections: {
        pages: {
            name: 'Pages',
            type: 'document',
            fields: [
                // Métadonnées de base
                {
                    name: 'title',
                    type: 'string',
                    title: 'Titre de la page',
                    group: 'meta'
                },
                {
                    name: 'description',
                    type: 'string',
                    title: 'Description SEO',
                    group: 'meta'
                },
                {
                    name: 'layout',
                    type: 'string',
                    title: 'Layout',
                    options: {
                        list: ['default', 'minimal']
                    },
                    initialValue: 'default',
                    group: 'meta'
                },

                // 🎯 SYSTÈME DE BLOCS MODULAIRES
                {
                    name: 'blocks',
                    type: 'array',
                    title: 'Blocs de contenu',
                    group: 'content',
                    of: [
                        // 🎯 Bloc Hero
                        {
                            type: 'object',
                            name: 'hero',
                            title: '🎯 Hero - Bannière principale',
                            fields: [
                                {
                                    name: 'type',
                                    type: 'string',
                                    hidden: true,
                                    initialValue: 'hero'
                                },
                                {
                                    name: 'title',
                                    type: 'string',
                                    title: 'Titre principal',
                                    validation: Rule => Rule.required()
                                },
                                {
                                    name: 'subtitle',
                                    type: 'text',
                                    title: 'Sous-titre'
                                },
                                {
                                    name: 'cta_text',
                                    type: 'string',
                                    title: 'Texte du bouton'
                                },
                                {
                                    name: 'cta_link',
                                    type: 'string',
                                    title: 'Lien du bouton'
                                },
                                {
                                    name: 'image',
                                    type: 'image',
                                    title: 'Image de fond'
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    subtitle: 'subtitle'
                                },
                                prepare(selection) {
                                    return {
                                        title: `🎯 Hero: ${selection.title}`,
                                        subtitle: selection.subtitle
                                    }
                                }
                            }
                        },

                        // 📝 Bloc Texte
                        {
                            type: 'object',
                            name: 'text',
                            title: '📝 Texte - Contenu textuel',
                            fields: [
                                {
                                    name: 'type',
                                    type: 'string',
                                    hidden: true,
                                    initialValue: 'text'
                                },
                                {
                                    name: 'title',
                                    type: 'string',
                                    title: 'Titre de section'
                                },
                                {
                                    name: 'subtitle',
                                    type: 'string',
                                    title: 'Sous-titre'
                                },
                                {
                                    name: 'content',
                                    type: 'text',
                                    title: 'Contenu',
                                    rows: 6
                                },
                                {
                                    name: 'alignment',
                                    type: 'string',
                                    title: 'Alignement',
                                    options: {
                                        list: [
                                            { title: 'Gauche', value: 'left' },
                                            { title: 'Centre', value: 'center' },
                                            { title: 'Droite', value: 'right' }
                                        ]
                                    },
                                    initialValue: 'left'
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    content: 'content'
                                },
                                prepare(selection) {
                                    return {
                                        title: `📝 Texte: ${selection.title || 'Sans titre'}`,
                                        subtitle: selection.content?.substring(0, 60) + '...'
                                    }
                                }
                            }
                        },

                        // 🖼️ Bloc Galerie d'images
                        {
                            type: 'object',
                            name: 'image_gallery',
                            title: '🖼️ Galerie - Collection d\'images',
                            fields: [
                                {
                                    name: 'type',
                                    type: 'string',
                                    hidden: true,
                                    initialValue: 'image_gallery'
                                },
                                {
                                    name: 'title',
                                    type: 'string',
                                    title: 'Titre de la galerie'
                                },
                                {
                                    name: 'description',
                                    type: 'text',
                                    title: 'Description'
                                },
                                {
                                    name: 'images',
                                    type: 'array',
                                    title: 'Images',
                                    of: [
                                        {
                                            type: 'image',
                                            options: {
                                                hotspot: true
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'layout',
                                    type: 'string',
                                    title: 'Disposition',
                                    options: {
                                        list: [
                                            { title: 'Grille', value: 'grid' },
                                            { title: 'Carrousel', value: 'carousel' },
                                            { title: 'Mosaïque', value: 'masonry' }
                                        ]
                                    },
                                    initialValue: 'grid'
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    images: 'images'
                                },
                                prepare(selection) {
                                    return {
                                        title: `🖼️ Galerie: ${selection.title || 'Sans titre'}`,
                                        subtitle: `${selection.images?.length || 0} image(s)`
                                    }
                                }
                            }
                        },

                        // 📞 Bloc Contact
                        {
                            type: 'object',
                            name: 'contact_info',
                            title: '📞 Contact - Informations de contact',
                            fields: [
                                {
                                    name: 'type',
                                    type: 'string',
                                    hidden: true,
                                    initialValue: 'contact_info'
                                },
                                {
                                    name: 'title',
                                    type: 'string',
                                    title: 'Titre de section'
                                },
                                {
                                    name: 'contacts',
                                    type: 'array',
                                    title: 'Informations de contact',
                                    of: [
                                        {
                                            type: 'object',
                                            fields: [
                                                {
                                                    name: 'contact_type',
                                                    type: 'string',
                                                    title: 'Type',
                                                    options: {
                                                        list: [
                                                            { title: 'Adresse', value: 'address' },
                                                            { title: 'Email', value: 'email' },
                                                            { title: 'Téléphone', value: 'phone' },
                                                            { title: 'Autre', value: 'other' }
                                                        ]
                                                    }
                                                },
                                                {
                                                    name: 'label',
                                                    type: 'string',
                                                    title: 'Libellé'
                                                },
                                                {
                                                    name: 'value',
                                                    type: 'text',
                                                    title: 'Valeur/Contenu'
                                                },
                                                {
                                                    name: 'icon',
                                                    type: 'string',
                                                    title: 'Icône (optionnel)'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    contacts: 'contacts'
                                },
                                prepare(selection) {
                                    return {
                                        title: `📞 Contact: ${selection.title || 'Informations'}`,
                                        subtitle: `${selection.contacts?.length || 0} contact(s)`
                                    }
                                }
                            }
                        },

                        // 🎬 Bloc Vidéo
                        {
                            type: 'object',
                            name: 'video',
                            title: '🎬 Vidéo - Contenu multimédia',
                            fields: [
                                {
                                    name: 'type',
                                    type: 'string',
                                    hidden: true,
                                    initialValue: 'video'
                                },
                                {
                                    name: 'title',
                                    type: 'string',
                                    title: 'Titre'
                                },
                                {
                                    name: 'description',
                                    type: 'text',
                                    title: 'Description'
                                },
                                {
                                    name: 'video_url',
                                    type: 'string',
                                    title: 'URL de la vidéo',
                                    description: 'Lien YouTube, Vimeo ou fichier local'
                                },
                                {
                                    name: 'poster',
                                    type: 'image',
                                    title: 'Image de prévisualisation'
                                },
                                {
                                    name: 'autoplay',
                                    type: 'boolean',
                                    title: 'Lecture automatique',
                                    initialValue: false
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    video_url: 'video_url'
                                },
                                prepare(selection) {
                                    return {
                                        title: `🎬 Vidéo: ${selection.title || 'Sans titre'}`,
                                        subtitle: selection.video_url
                                    }
                                }
                            }
                        },

                        // 🎯 Bloc CTA
                        {
                            type: 'object',
                            name: 'cta',
                            title: '🎯 CTA - Call to Action',
                            fields: [
                                {
                                    name: 'type',
                                    type: 'string',
                                    hidden: true,
                                    initialValue: 'cta'
                                },
                                {
                                    name: 'title',
                                    type: 'string',
                                    title: 'Titre principal'
                                },
                                {
                                    name: 'description',
                                    type: 'text',
                                    title: 'Description'
                                },
                                {
                                    name: 'button_text',
                                    type: 'string',
                                    title: 'Texte du bouton'
                                },
                                {
                                    name: 'button_link',
                                    type: 'string',
                                    title: 'Lien du bouton'
                                },
                                {
                                    name: 'style',
                                    type: 'string',
                                    title: 'Style',
                                    options: {
                                        list: [
                                            { title: 'Standard', value: 'standard' },
                                            { title: 'Accentué', value: 'accent' },
                                            { title: 'Minimal', value: 'minimal' }
                                        ]
                                    }
                                },
                                {
                                    name: 'background_color',
                                    type: 'string',
                                    title: 'Couleur de fond',
                                    options: {
                                        list: [
                                            { title: 'Blanc', value: 'white' },
                                            { title: 'Gris clair', value: 'gray' },
                                            { title: 'Marron', value: 'brand' }
                                        ]
                                    }
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    button_text: 'button_text'
                                },
                                prepare(selection) {
                                    return {
                                        title: `🎯 CTA: ${selection.title || 'Sans titre'}`,
                                        subtitle: `Bouton: "${selection.button_text}"`
                                    }
                                }
                            }
                        }
                    ]
                }
            ],

            // Groupes pour organiser les champs
            fieldsets: [
                {
                    name: 'meta',
                    title: '📄 Métadonnées',
                    options: {
                        collapsible: true,
                        collapsed: false
                    }
                },
                {
                    name: 'content',
                    title: '🧱 Blocs de contenu',
                    options: {
                        collapsible: true,
                        collapsed: false
                    }
                }
            ]
        }
    }
}