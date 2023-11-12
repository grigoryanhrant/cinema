import FeaturedCoverImage from "../assets/static/FeaturedCoverImage.png";
import HttpsSpecials1 from "../assets/static/https_specials-1.png";
import HttpsSpecials2 from "../assets/static/https_specials-2.png";
import HttpsSpecials3 from "../assets/static/https_specials-3.png";
import HttpsSpecials4 from "../assets/static/https_specials-4.png";
import HttpsSpecials5 from "../assets/static/https_specials-5.png";
import HttpsSpecials6 from "../assets/static/https_specials-6.png";
import HttpsSpecials7 from "../assets/static/https_specials-7.png";
import HttpsSpecials8 from "../assets/static/https_specials-8.png";

interface StaticImagesType {
    [key: string]: string;
}

const staticImages: StaticImagesType = {
    "FeaturedCoverImage.png": FeaturedCoverImage,
    "https_specials-1.png": HttpsSpecials1,
    "https_specials-2.png": HttpsSpecials2,
    "https_specials-3.png": HttpsSpecials3,
    "https_specials-4.png": HttpsSpecials4,
    "https_specials-5.png": HttpsSpecials5,
    "https_specials-6.png": HttpsSpecials6,
    "https_specials-7.png": HttpsSpecials7,
    "https_specials-8.png": HttpsSpecials8,
};

export const getStaticImageUrl = (fileName: string): string | undefined => {
    for (const image in staticImages) {
        if (fileName == image) {
            return staticImages[image];
        }
    }
}