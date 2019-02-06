import {biography} from './biograpthy';

export const english = {
  languageData: {
    pages: {
      auth: {
        name: 'Hello',
        placeholders: {
          email: 'Email',
          password: 'Password',
          submit: 'SUBMIT',
        },
      },
      cemetery: {
        topImage: {
          topImageTextHeader: 'Cemetery',
          topImageTextSubHeader: null,
        },
        mainParagraph: [
          `Dear Friends!`,
          `A Russian cemetery is located on the territory of the Hermitage of the Protection of the Mother of God. From the moment of the establishment of our church community 70 years ago, our clergy and the faithful made sure that there would be an Orthodox cemetery near the church. Burials of the reposed have take place at this cemetery since then.`,
          `Today the graves of Orthodox Russians, Ukrainians, Americans, Serbians and of many others, for whom it was important to be buried in sacred ground, peacefully lie in the shadow of the church domes.`,
          `The cemetery is in a quiet wooded area and is cared for by the residents of the Hermitage. It is significant that the price of graves is within the ability of people of all means.`,
          `Please direct all questions to the Rector of the Hermitage, Father Tikhon.`,
        ],

        cemeterySlider1: [
          'images/cemetery/slider1/020.jpg',
          'images/cemetery/slider1/030.jpg',
          'images/cemetery/slider1/040.jpg',
          'images/cemetery/slider1/050.jpg',
          'images/cemetery/slider1/060.jpg',
          'images/cemetery/slider1/070.jpg',
          'images/cemetery/slider1/080.jpg',
          'images/cemetery/slider1/090.jpg',
        ],
        firstBannerCemetery: {
          firstBannerCemeteryText: '“If we make every effort to avoid death of the body, still more should it be our endeavor to avoid death of the soul. There is no obstacle for a man who wants to be saved other than negligence and laziness of soul.”',
          firstBannerCemeteryTextAuthor: '+ St. Anthony the Great',
        },
        secondBannerCemetery: {
          secondBannerCemeteryButtonText: 'Directions',
        },
      },
      clergy: {
        clergyMetropolitan: {
          clergyMetropolitanName: `His Eminence HILARION, Metropolitan of 
                                       Eastern America and New York, First 
                                       Hierarch of the Russian Church Abroad`,
          clergyMetropolitanTitle: 'Ruling Bishop of the Eastern American Diocese',
          clergyMetropolitanAddressName: 'Very Most Reverend Metropolitan Hilarion',
          clergyMetropolitanAddress1: '75 East 93rd Street',
          clergyMetropolitanAddress2: 'New York, NY 10128-1390',
        },
        rector: {
          clergyRectorName: 'Abbot Tikhon (Gayfudinov)',
          clergyRectorTitle: 'Rector',
          clergyRectorAddress1: 'The Hermitage Of The Holy Protection, 333 Weymouth Road',
          clergyRectorAddress2: 'Buena, NJ 08310',
          clergyRectorEmailButtonText: 'Write a email',
          biography: biography.frTikhon.english,
          clergyRectorBiographyButtonText: 'Biography',
          clergyRectorBiographyTitle: 'Biography',
        },
        priest2: {
          clergyPriest2Name: 'Priest Anatoly Revitskyy',
          clergyPriest2Title: '',
          clergyPriest2Address1: '1329 Blakeslee Court. 2nd fl.',
          clergyPriest2Address2: 'Philadelphia, PA 19116',
          clergyPriest2EmailButtonText: 'Write a email',
        },
        deacon1: {
          name: 'Deacon Dimitri Krenitsky',
          title: '',
          address1: '905 Cable Hill Drive',
          address2: 'Springfield, PA 19064',
          emailButtonText: 'Write a email',
        },
      },
      contactUs: {
        contactUsFormData: {
          contactUsFormHeader: 'Contact Us',
          contactUsFormButton: 'Send',
          contactUsFormInputMessage: 'Include your message here...',
          contactUsFormInputName: 'Your Name',
          contactUsFormInputEmail: 'Your E-Mail',
          emailSuccessfullySend: 'Your email was successfully sent. Thank you.',
        },
        changeEmailRecipientText: 'Change Email Recipient',
        frTikhonNameChangeButton: 'father Tikhon',
        frAnatolyNameChangeButton: 'father Anatoly',
        deaconDimitriNameChangeButton: 'deacon Dimitri'
      },
      directions: {
        url: 'http://maps.google.com/?q=333+Weymouth+Rd,+Buena,+NJ+08310,+United+States',
        directionsButtonText: 'GET DIRECTIONS'
      },
      donations: {
        donationType1: {
          donationTitle: 'Send Check Via Mail',
          donationParagraph1: {
            donationParagraphTitle: 'We will be thankful for any donations made via check. Checks can be mailed to',
            donationParagraphText: 'Hermitage Of The Holy Protection, 333 Weymouth Road, Buena, NJ 08310'
          },
          donationParagraph2: {
            donationParagraphTitle: 'Please write checks out to',
            donationParagraphText: 'Sviato Pokrovsky Russ Church'
          }
        },
        donationType2: {
          donationTitle: 'Make A Donation',
        }
      },
      homePage: {
        topImage: {
          topImageTextHeader: 'Russian Orthodox Church Outside Russia',
          topImageTextSubHeader: 'The Hermitage Of The Holy Protection',
        },
        mainParagraph: [
          `The vigil lamp of church life in our Hermitage of the Holy Protection of the Mother of God was lit in 1953, when in the Southern New Jersey village of Buena Vista a church community was established, consisting primarily of Russian Cossacks who could not conceive of life and activities without their Orthodox traditions, divine services and missionary outreach.`,
          `The community set out to build a small church in the style of Russian Church architecture with a full-fledged parish and liturgical life, to establish a church school and apportion land for a cemetery where any Orthodox Christian could find a place for his eternal rest in the shadow of the church domes.`,
          `Parish life progressively developed in this manner for many decades. The peace and tranquility of the surroundings of the church and, with time, the decreasing number of active parishioners, has led to the realization that this location is an ideal spot for the establishment of a small monastic community. The relative isolation and distance from the tumult of a secular city favor the development here of traditional Russian monastic life and inner prayer.`,
          `Thus, with the blessing of His Eminence, Metropolitan Hilarion, the First Hierarch of the Russian Orthodox Church Outside of Russia, in 2015 the parish of the Protection of the Mother of God was transformed into the Hermitage of the Protection of the Mother of God with the establishment there of a monastic brotherhood dedicated to St. Varlaam, Abbot of Hutin, the Wonderworker of Novgorod. Hieromonk Tikhon (Gayfudinov) was appointed superior of the newly-established hermitage.`,
          `The Hermitage of the Protection of the Mother of God welcomes all faithful worshippers who desire to pray and labor for the glory of God in this holy place, every person who sincerely seeks a tranquil prayer life.`,
        ],
        mainPageSlideshowButtonText: 'SLIDESHOW',
      },
      skete: {},
    },
    menu: {
      menuHomePage: 'Home Page',
      menuSkete: 'Skete',
      menuCemetery: 'Cemetery',
      menuClergy: 'Clergy',
      menuDirections: 'Directions',
      menuContactUs: 'Contact Us',
      menuDonations: 'Donation',
    },
    switchLanguage: {
      switchLanguageRussian: 'Russian',
      switchLanguageEnglish: 'English',
    },
    calendar: {
      date: '',
      holidays: [],
      contentHtml: {
        voice: 'Voice',
      },
    },
    news: {
      newsContent: [],
      text: {
        readMore: 'Read more...',
      },
    },
    footer: {},
    notifications: {},
  },
};
export default english;