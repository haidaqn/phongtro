export interface Post {
    id: string;
    title: string;
    star: string;
    address: string;
    description: string;
    images: {
        image: string;
    };
    attributes: {
        price: string;
        acreage: string;
        published: string;
        hashtag: string;
    };
    user: {
        name: string;
        zalo?: string;
        phone :string
    };
}
