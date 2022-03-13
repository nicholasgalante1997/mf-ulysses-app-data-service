import mountain from '../markdown/Mountain.md';
import { ArticleCategories } from './article-types';
import "./types.d";

export default {
    meta: {
        name: "The King on the Mountains (of Madness)",
        author: "Nick Galante",
        categories: [
            ArticleCategories.nihilist, 
            ArticleCategories.ranty, 
            ArticleCategories.absurd,
            ArticleCategories.lovecraft
        ],
        shortDesc: "A van's assent into the Rocky Mountains offers us several unique perspectives on Man's (woman and man) experience on this earth, what constitutes a delusion, and kings.",
        imageModule: "./MountainImage"
    },
    markdown: mountain
};