import origin from '../markdown/Origin.md';
import "./types.d";

enum ArticleCategories {
    origin = 'origin',
    genesis = 'genesis',
    absurd = 'absurd',
    comedy = 'comedy',
    nihilist = 'nihilo'
}

export default {
    meta: {
        name: "origin",
        author: "Nick Galante",
        categories: [
            ArticleCategories.genesis, 
            ArticleCategories.origin, 
            ArticleCategories.comedy
        ],
        shortDesc: "A discovery is made in a remote scientific excursion to Antarctica that wrings out the very fabric of the humans' perception of their own existence. Heavy stuff.",
        imageModule: "./OriginImage"
    },
    markdown: origin
};