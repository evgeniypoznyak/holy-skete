import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  data: {
    english: {
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
              secondBannerCemeteryButtonText: 'Get Directions',
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
              clergyRectorName: 'Hieromonk Tikhon (Gayfudinov)',
              clergyRectorTitle: 'Rector',
              clergyRectorAddress1: 'Hermitage Of The Holy Protection, 333 Weymouth Road',
              clergyRectorAddress2: 'Buena, NJ 08310',
              clergyRectorEmailButtonText: 'Write a email',
            },
            priest2: {
              clergyPriest2Name: 'Priest Anatoly Revitskyy',
              clergyPriest2Title: '',
              clergyPriest2Address1: '1329 Blakeslee Court. 2nd fl.',
              clergyPriest2Address2: 'Philadelphia, PA 19116',
              clergyPriest2EmailButtonText: 'Write a email',
            },
          },
          contactUs: {},
          directions: {},
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
          menuDonations: 'Make a donation',
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
    },
    russian: {
      languageData: {
        pages: {
          auth: {
            name: 'Привет',
            placeholders: {
              email: 'Емейл',
              password: 'Пароль',
              submit: 'ОТПРАВИТЬ',
            },
          },
          cemetery: {
            topImage: {
              topImageTextHeader: 'Кладбище',
              topImageTextSubHeader: null,
            },
            mainParagraph: [
              `Дорогие друзья!`,
              `На территории Покровского Скита действует Русское кладбище. С момента основания нашей церковной общины 70 лет назад, духовенство и верующие позаботились о том, что бы при храме находилось православное кладбище. С тех пор начались первые захоронения.`,
              `И потому теперь, в тени церковных куполов, покоятся в мире православные русские, американцы , украинцы, сербы и многие другие, все те, для кого было не безразлично где найти своё вечное упокоение.`,
              `Кладбище располагаться в тихой лесной местности и за ним ухаживают насельники скита, при этом примечательно, что цены у нас остаются приемлемыми для людей разного достатка. `,
              `Если у вас возникли вопросы, вы всегда можете обратиться к настоятелю.`,
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
              firstBannerCemeteryText: '“Начало жизни у меня есть конец, и конец – начало. Я не знаю, откуда прихожу, не знаю, где нахожусь, и не ведаю, жалкий, куда опять пойду. Я рождаюсь как земля от земли и как тело от тела, будучи, конечно, от тленного тленным и смертным. Малое время я провожу на земле, живя во плоти, и умираю и, переходя из этой жизни, начинаю жить другой. Я оставляю в земле тело, которое потом воскреснет и будет жить бесконечной жизнью вовеки.”',
              firstBannerCemeteryTextAuthor: '+ Преподобный Симеон Новый Богослов',
            },
            secondBannerCemetery: {
              secondBannerCemeteryButtonText: 'Как доехать?',
            },
          },
          clergy: {
            clergyMetropolitan: {
              clergyMetropolitanName: `Высокопреосвященнейший ИЛАРИОН, Митрополит 
                                       Восточно-Американский и Нью-Йоркский, 
                                       Первоиерарх Русской Зарубежной Церкви`,
              clergyMetropolitanTitle: 'Правящий архиерей Восточно-Американской епархии',
              clergyMetropolitanAddressName: 'Very Most Reverend Metropolitan Hilarion',
              clergyMetropolitanAddress1: '75 East 93rd Street',
              clergyMetropolitanAddress2: 'New York, NY 10128-1390',
            },
            rector: {
              clergyRectorName: 'Иеромонах Тихон (Гайфудинов)',
              clergyRectorTitle: 'Настоятель',
              clergyRectorAddress1: 'Hermitage Of The Holy Protection, 333 Weymouth Road',
              clergyRectorAddress2: 'Buena, NJ 08310',
              clergyRectorEmailButtonText: 'Написать на электронную почту',
            },
            priest2: {
              clergyPriest2Name: 'Иерей Анатолий Ревицкий',
              clergyPriest2Title: '',
              clergyPriest2Address1: '1329 Blakeslee Court. 2nd fl.',
              clergyPriest2Address2: 'Philadelphia, PA 19116',
              clergyPriest2EmailButtonText: 'Написать на электронную почту',
            },
          },
          contactUs: {},
          directions: {},
          donations: {
            donationType1: {
              donationTitle: 'Выписать денежный чек',
              donationParagraph1: {
                donationParagraphTitle: 'Мы будем рады, если вы пришлете пожертвование в ввиде чека на наш адрес',
                donationParagraphText: 'Hermitage Of The Holy Protection, 333 Weymouth Road, Buena, NJ 08310'
              },
              donationParagraph2: {
                donationParagraphTitle: 'Чек должен быть выписан на имя',
                donationParagraphText: 'Sviato Pokrovsky Russ Church'
              }
            },
            donationType2: {
              donationTitle: 'Cовершить пожертвование прямо сейчас',
            }
          },
          homePage: {
            topImage: {
              topImageTextHeader: 'Русская Православная Церковь Заграницей',
              topImageTextSubHeader: 'Скит Покрова Божией Матери',
            },
            mainParagraph: [
              `Лампада Церковной жизни в нашем Покровском Скиту затеплилась в далеком 1953 году, когда в Южном Нью-Джерси в местечке Бьюна Виста образовалась церковная община состоящая преимущественно из русских Казаков, которые не воспринимали свою жизнь и деятельность в отрыве от Православной традиции, от богослужебного и миссионерского служения`,
              `Собравшись вместе было принято решение возвести небольшой храм, который мог бы воплотить в себе опыт русского церковного зодчества, начать при нем полноценную приходскую и богослужебную деятельность, открыть церковную школу и выделить при храме место для кладбища, с тем, что бы каждый православный верующий, мог бы найти для себя тихое место вечного покоя в тени церковных куполов.`,
              `Таким образом приходская жизнь развивалась в течении многих десятилетий. Тишина и умиротворенность храмовой окрестности, а так же отсутсвие должного количества активных прихожан способствовали развитию идеи о том, что данное место вполне благоприятно для открытия здесь небольшой монашеской общины, с тем, что бы немноголюдность, удаленность от мирской городской суеты благоприятствовали бы развитию здесь традиционного русского монашеского делания, акцентированного прежде всего на глубине молитвенного подвига.`,
              `Таким образом в 2015 году, по благословению Высокопреосвященнейшего Митрополита Илариона, Первоиерарха Русской Зарубежной Церкви, Приход Покрова Пресвятой Богородицы преобразован в Покровский Скит с открытием при нем монашеского братства имени преподобного Варлаама игумена Хутынского Новгородского Чудотворца. Настоятелем новообразованного Скита назначен иеромонах Тихон ( Гайфудинов).`,
              `Скит Покрова Божией Матери открывает свои двери перед всяким богомольцем, желающем помолиться и потрудиться во Славу Божию на сем святом месте, перед всяким человеком, кто искренне ищет тихого молитвенного пристанища.`,
            ],
            mainPageSlideshowButtonText: 'СМОТРЕТЬ СЛАЙДШОУ',
          },
          skete: {},
        },
        menu: {
          menuHomePage: 'Главная',
          menuSkete: 'Скит',
          menuCemetery: 'Кладбище',
          menuClergy: 'Духовенство',
          menuDirections: 'Как добраться',
          menuContactUs: 'Связаться с нами',
          menuDonations: 'Пожертвовать',
        },
        switchLanguage: {
          switchLanguageRussian: 'Русский',
          switchLanguageEnglish: 'Английский',
        },
        calendar: {
          date: '',
          holidays: [],
          contentHtml: {
            voice: 'Глас',
          },
        },
        news: {
          newsContent: [],
          text: {
            readMore: 'Читать далее...',
          },
        },
        footer: {},
        notifications: {},
      },
    },
  },
};

const onDataReceived = (state, action) => {
  return updateObject(state, {
    data: action.data,
  });
};

const setupNewsFeed = (state, action) => {
  const objectToUpdate = {
    data: {
      ...state.data,
      russian: {
        ...state.data.russian,
        languageData: {
          ...state.data.russian.languageData,
          news: {
            ...state.data.russian.languageData.news,
            newsContent: action.news.russian,
          },
        },
      },
      english: {
        ...state.data.english,
        languageData: {
          ...state.data.english.languageData,
          news: {
            ...state.data.english.languageData.news,
            newsContent: action.news.english,
          },
        },
      },
    },
  };
  return updateObject(state, objectToUpdate);
};

const setupCalendar = (state, action) => {
  //console.log('action.calendar: ', action.calendar);
  const objectToUpdate = {
    data: {
      ...state.data,
      russian: {
        ...state.data.russian,
        languageData: {
          ...state.data.russian.languageData,
          calendar: {
            ...state.data.russian.languageData.calendar,
            date: action.calendar.dateRus,
            holidays: action.calendar.holidaysRus.holidays,
            saints: action.calendar.holidaysRus.saints,
            voice: action.calendar.holidaysRus.voice + '-й',
            week: action.calendar.holidaysRus.week,
          },
        },
      },
      english: {
        ...state.data.english,
        languageData: {
          ...state.data.english.languageData,
          calendar: {
            ...state.data.english.languageData.calendar,
            date: action.calendar.dateEng,
            holidays: action.calendar.holidaysEng.holidays,
            saints: action.calendar.holidaysEng.saints,
            voice: action.calendar.holidaysEng.voice + 'th',
            week: action.calendar.holidaysRus.week,
          },
        },
      },
    },
  };
  return updateObject(state, objectToUpdate);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_RECEIVED:
      return onDataReceived(state, action);
    case actionTypes.SETUP_NEWS_FEED:
      return setupNewsFeed(state, action);
    case actionTypes.SETUP_CALENDAR:
      return setupCalendar(state, action);
    default:
      return state;
  }
};

export default reducer;