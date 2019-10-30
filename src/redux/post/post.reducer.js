import PostActionTypes from './post.types';

const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
    posts: [
        {
        "id": 32,
        "title": "Presidential harassment, Mr. Trump? Nope. Congress is doing its job.",
        "author": null,
        "publisher": null,
        "publicationDate": "Feb. 09, 2019",
        "language": null,
        "category": "Management",
        "numberOfPages": 0,
        "format": null,
        "isbn": null,
        "shippingWeight": 0,
        "listPrice": 0,
        "ourPrice": 0,
        "active": false,
        "description": "dsfsdfsdgsddfgdf\n\ndffdsfsdafsdf\n\ndsasdgdsgasdgs\n\n ---------------",
        "inStockNumber": 0,
        "bookImage": "https://images.unsplash.com/photo-1572210297784-87d9eb73e323?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
        },
        {
        "id": 33,
        "title": "Jeff Bezos Isn’t Afraid of Total Exposure",
        "author": null,
        "publisher": null,
        "publicationDate": "Feb. 09, 2019",
        "language": null,
        "category": "Management",
        "numberOfPages": 0,
        "format": null,
        "isbn": null,
        "shippingWeight": 0,
        "listPrice": 0,
        "ourPrice": 0,
        "active": false,
        "description": "-----------------\n\n<blockquote>This is true on a superficial and titillating level, of course. Last month, The National Enquirer broke the story about Mr. Bezos’ affair and quoted awkward and somewhat sweet sexts he had sent his girlfriend. There were also insinuations about the existence of photos of his penis</blockquote>\n\n ----------------\n\nBut now the news is about something bigger. By using a digital platform to bring his side of the story directly to the masses, Mr. Bezos has done something both admirable and also a little scary. Most revealing — and I say this about a story that is lousy with revelations — is that it is perhaps the best illustration of the in-your-face aggressiveness that has made him the richest man in the world and arguably the most important tech visionary since Steve Jobs.",
        "inStockNumber": 0,
        "bookImage": "https://images.unsplash.com/photo-1572289233642-001021482efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
        "id": 36,
        "title": "Behind an Impeachment Inquiry, a Forgotten War",
        "author": null,
        "publisher": null,
        "publicationDate": "Oct. 24, 2019",
        "language": null,
        "category": "Fiction",
        "numberOfPages": 0,
        "format": null,
        "isbn": null,
        "shippingWeight": 0,
        "listPrice": 0,
        "ourPrice": 0,
        "active": true,
        "description": "**Fought in muddy trenches** cut _through hundreds of miles_ of farmland,\n\n >the war in Ukraine has killed 13,000 people, put a large part of the country under Russia’s \n\ncontrol and dragged on for five years almost forgotten by the outside world — until it became a backdrop to the impeachment inquiry of President Trump now unfolding in Washington.\n\nUkraine, politically disorganized and militarily weak, has relied heavily on the United States in its struggle with Russian-backed separatists. But the White House abruptly suspended nearly $400 million in military aid to Ukraine in July and only restored it last month after a bipartisan uproar in Congress.",
        "inStockNumber": 0,
        "bookImage": "https://images.unsplash.com/photo-1572012056795-8f127bf5753b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        },
        {
            "id": 37,
            "title": "Microsoft Wins Pentagon’s $10 Billion JEDI Contract, Thwarting Amazon",
            "author": null,
            "publisher": null,
            "publicationDate": "Oct. 24, 2019",
            "language": null,
            "category": "Fiction",
            "numberOfPages": 0,
            "format": null,
            "isbn": null,
            "shippingWeight": 0,
            "listPrice": 0,
            "ourPrice": 0,
            "active": true,
            "description": "Amazon was considered a front-runner for the cloud computing project before President Trump began criticizing the company’s founder, Jeff Bezos. Amazon was considered a front-runner for the cloud computing project before President Trump began criticizing the company’s founder, Jeff Bezos. Amazon was considered a front-runner for the cloud computing project before President Trump began criticizing the company’s founder, Jeff Bezos.Amazon was considered a front-runner for the cloud computing project before President Trump began criticizing the company’s founder, Jeff Bezos.",
            "inStockNumber": 0,
            "bookImage": "https://images.unsplash.com/photo-1572165888483-73b1c6e16b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
        ]
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_POST_LIST_START:
            return {
                ...state,
                isFetching: true
            }
        case PostActionTypes.FETCH_POST_LIST_SUCCESS:
            return{
                ...state,
                isFetching: false,
                posts: action.payload
            }
        case PostActionTypes.FETCH_POST_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;

    }
}

export default postReducer;