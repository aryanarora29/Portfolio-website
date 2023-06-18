import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
///lib/types/builder

export const client = SanityClient({
projectId: '4rpuofiu',

//process.env.REACT_APP_SANITY_PROJECT_ID,
dataset: 'production',
//apiVersion: '2022-02-01',
useCdn: true,
token:'skNmdBaQrMeeQMkG2ICJ3BgZFHjXTOeIvaXIMCauDEoEK8lTUVN1szX0j8gAorCYQTFAwPPj1mIB96I78PxkHOgORZkp0f6AfXDGsCnjjfm5VK3mPvkTnIUTWtjNOMLK6EInJ4gUcyKV87iYiDbXSS7xnHeZ6NJFDqAnFP0kvJ8FZ3TzssZM',
 
//process.env.REACT_APP_SANITY_TOKEN,
}) ;

const  builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//     projectId: '4rpuofiu',
//     //process.env.REACT_APP_SANITY_PROJECT_ID,
//     dataset: 'production',
//     apiVersion: '2023-06-15',
//     useCdn: true,
//     token: 'skNmdBaQrMeeQMkG2ICJ3BgZFHjXTOeIvaXIMCauDEoEK8lTUVN1szX0j8gAorCYQTFAwPPj1mIB96I78PxkHOgORZkp0f6AfXDGsCnjjfm5VK3mPvkTnIUTWtjNOMLK6EInJ4gUcyKV87iYiDbXSS7xnHeZ6NJFDqAnFP0kvJ8FZ3TzssZM',
//     //process.env.REACT_APP_SANITY_TOKEN,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);


//import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "myProjectID",
//   dataset: "production",
//   useCdn: true,
//  // apiVersion: "2022-02-03"

//  //token: 'skNmdBaQrMeeQMkG2ICJ3BgZFHjXTOeIvaXIMCauDEoEK8lTUVN1szX0j8gAorCYQTFAwPPj1mIB96I78PxkHOgORZkp0f6AfXDGsCnjjfm5VK3mPvkTnIUTWtjNOMLK6EInJ4gUcyKV87iYiDbXSS7xnHeZ6NJFDqAnFP0kvJ8FZ3TzssZM',
 
// });

